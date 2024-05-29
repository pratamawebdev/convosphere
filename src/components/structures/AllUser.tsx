/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { DATA_HEADER_TABLE } from "@/constants";
import Table from "../elements/Table";
import UserLayout from "../elements/UserLayout";
import { useAppDispatch, useAppSelector } from "@/hooks/useRedux";
import { useEffect, useState } from "react";
import { deleteUser, fetchUsers } from "@/redux/slices/usersSlice";
import Image from "next/image";
import Badge from "../elements/Badge";
import Pencil from "@/assets/icons/Pencil";
import Trash from "@/assets/icons/Trash";
import Pagination from "../elements/Pagination";
import { confirmDeleteAlert } from "@/utils/confirmDeleteAlert";
import Modal from "../elements/Modal";
import { UserFormType } from "@/libs/form-schema";
import useDebounce from "@/hooks/useDebounce";
import FormCreateUser from "./FormCreateUser";
import FormEditUser from "./FormEditUser";
import dynamic from "next/dynamic";

const DynamicModal = dynamic(() => import("../elements/Modal"), {
  loading: () => <p>Loading...</p>,
});

const AllUser = () => {
  const [open, setOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState<UserFormType | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const { debounce, debounceTimeout } = useDebounce();
  const userStatus = useAppSelector((state) => state.users.status);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    if (userStatus === "idle" || userStatus === "succeeded") {
      dispatch(fetchUsers({ page: currentPage, per_page: perPage }));
    }
  }, [dispatch, currentPage]);

  useEffect(() => {
    const delayedFetchUsers = debounce(() => {
      dispatch(
        fetchUsers({ page: currentPage, per_page: perPage, name: searchTerm })
      );
    }, 500);

    delayedFetchUsers();

    return () => {
      if (debounceTimeout.current) clearTimeout(debounceTimeout.current);
    };
  }, [searchTerm]);

  const handleEditUser = (user: UserFormType) => {
    setSelectedUser(user);
    setOpen(true);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleDeleteUser = async (userId: number): Promise<void> => {
    await dispatch(deleteUser(userId)).unwrap();
    dispatch(fetchUsers({ page: currentPage, per_page: perPage }));
  };

  const showAlertDelete = (userId: number) => {
    confirmDeleteAlert({
      handleDelete: () => handleDeleteUser(userId),
    });
  };

  const closeModal = () => {
    setOpen(false);
    setSelectedUser(null);
  };

  const openModal = () => setOpen(true);
  return (
    <UserLayout
      title="All User"
      pagination={
        <Pagination
          prevOnClick={handlePrevPage}
          nextOnClick={handleNextPage}
          disabledPrev={currentPage === 1}
          disabledNext={users.length < perPage}
          currentPage={currentPage}
        />
      }
      onClick={() => {
        setSelectedUser(null);
        setOpen(true);
      }}
    >
      <div className="w-full my-4">
        <input
          type="text"
          placeholder="Search users"
          value={searchTerm}
          className="border-2 px-2 py-1 rounded-lg"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <Table
        th={DATA_HEADER_TABLE.map((item, index) => (
          <th
            key={index}
            className="py-[1.25rem] px-4 text-[1.05rem] text-white font-extrabold text-left"
          >
            {item}
          </th>
        ))}
        tr={users?.map((item) => (
          <tr
            key={item.id}
            className="transition-all delay-75 hover:cursor-pointer hover:bg-primary hover:bg-opacity-20"
          >
            <td className="p-4 bg-transparent text-black align-middle">
              {item.id}
            </td>
            <td className="p-4 bg-transparent text-black align-middle flex items-center gap-1">
              <Image
                src={"/images/public-avatar.webp"}
                width={48}
                height={48}
                alt={"avatar"}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col gap-[0.25rem]">
                <div className="font-bold whitespace-nowrap">{item.name}</div>
                <div>{item.email}</div>
              </div>
            </td>
            <td className="p-4 bg-transparent text-black align-middle">
              {item.gender}
            </td>
            <td className="p-4 bg-transparent text-black align-middle">
              <Badge variant={item.status === "active" ? "active" : "inactive"}>
                {item.status}
              </Badge>
            </td>
            <td className="p-4 bg-transparent text-black align-middle">
              <div className="flex items-center gap-2">
                <button
                  className="bg-orange-500 p-1 rounded-lg"
                  onClick={() => handleEditUser(item)}
                >
                  <Pencil
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                    className="size-6"
                  />
                </button>
                <button
                  className="bg-red-500 p-1 rounded-lg"
                  onClick={() => showAlertDelete(item.id)}
                >
                  <Trash
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                    className="size-6"
                  />
                </button>
              </div>
            </td>
          </tr>
        ))}
      />
      <DynamicModal onClose={closeModal} open={open} title="Add User">
        {selectedUser ? (
          <FormEditUser userData={selectedUser as any} />
        ) : (
          <FormCreateUser />
        )}
      </DynamicModal>
    </UserLayout>
  );
};

export default AllUser;

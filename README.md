## How to Run Project

To run the project, you can follow the steps below.

- Clone the repository to your local machine using the following command:

```shell
$ git clone https://github.com/pratamawebdev/convosphere.git
```

- Rename the .env.example file to .env:

```shell
$ mv .env.example .env
```

- Open the .env file and add your NEXT_PUBLIC_API_TOKEN & NEXT_PUBLIC_API_BASE_URL. You can obtain this token from GoREST.

```shell
$ NEXT_PUBLIC_API_TOKEN=your_token_here
```

- Install the necessary npm packages:

```shell
$ npm install
```

## Running the Application

- Once the installation is complete, start the development server:

```shell
$ npm run dev
```

You can now access the website at [`localhost:3000`](http://localhost:3000)

## Deployment

Visit The Website [https://convosphere-psi.vercel.app/](https://convosphere-psi.vercel.app/)

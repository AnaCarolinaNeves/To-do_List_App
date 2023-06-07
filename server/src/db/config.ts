export = {
    development: {
        client: "postgresql",
        connection: {
            host: "localhost",
            port: "5432",
            database: "template1",
            user: "postgres",
            password: "123123",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: __dirname + "/migrations",
            tableName: "knex_migrations",
            extensions: "ts",
        },
    },
} as { [key: string]: object };
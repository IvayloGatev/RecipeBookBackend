
const databaseConfig ={
    host: "recipebookdb.cececvtgerkt.us-east-1.rds.amazonaws.com",
    database: "recipebookdb",
    port: 5432,
    user: "master",
    password: "postgres",
    ssl:{
        rejectUnauthorized: false
    }
};

export default databaseConfig;
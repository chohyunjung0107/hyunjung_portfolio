import sql from "mssql";

// const sql = require("mssql");

async function connect() {
    try {
        const pool = await sql.connect({
            user: "sa",
            password: "Altiall!000@",
            server: "61.101.55.159",
            port: 8902,
            database: "prismWcs",
            options: {
                encrypt: true,
                trustServerCertificate: true,
                enableArithAbort: true,
            },
        });

        // MSSQL 데이터베이스에 연결되었습니다.
        return pool;
    } catch (error) {
        console.log(error);
    }
}

// 연결을 사용하여 MSSQL 프로시저를 호출할 수 있습니다.
const callStoredProcedure = async () => {
    try {
        // MSSQL 데이터베이스에 연결합니다.
        const pool = await connect();

        // MSSQL 프로시저를 호출합니다.
        const result = await pool
            .request()
            .input("RETURN_RESULT", sql.Int, "")
            .input("RETURN_ERR", sql.VarChar, "")
            .input("RETURN_ERR_MSG", sql.VarChar, "")
            .execute("SP_COM_USER_MST_LIST");

        console.log("프로시저", result.recordset);
    } catch (error) {
        console.log(error);
    }
};

export default callStoredProcedure;

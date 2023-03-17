import sql from "mssql";

// const sql = require("mssql");

const config = {
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
};

const getTableData = async (_req, res) => {
    try {
        // MSSQL 데이터베이스에 연결
        sql.connect(config);

        // 테이블 데이터 가져오기
        const result = await sql.query(`select * from TB_COM_USER_MST`);

        if (!Array.isArray(result.recordset)) {
            throw new Error("Cannot find user data");
        }
        // 결과 출력
        // console.dir(result);
        res.status(200).json(result.recordset);

        // MSSQL 데이터베이스 연결 종료
        // await sql.close();
    } catch (err) {
        // 오류 처리
        // try 실패시, 에러코드(500) 응답(res)하고, json형식으로 에러 메시지 출력
        res.status(500).json({ statusCode: 500, message: err.message });
        console.error(err);
    }
};

export default getTableData;

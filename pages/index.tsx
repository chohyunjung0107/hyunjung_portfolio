import React from "react";
import Link from "next/link";
import axios from "axios";
import fetch from "isomorphic-unfetch";
import { type } from "os";

type propsType = {
    data?: any;
    Pdata?: any;
};

export default function Index({ data }: propsType) {
    let datas = data.map((v: any) => {
        return v;
    });
    // let Pdatas = Pdata.map((v: any) => {
    //     return v;
    // });

    return (
        <div>
            <h2>Link to Pages</h2>
            <Link href="/home">move to 라우터 이동</Link>
            <br />
            <Link href="/dragNdrop">move to 드래그앤드롭</Link>
            <br />
            <Link href="/projects">프로젝트 모음 페이지</Link>
            <h2>get SSR API TEST</h2>
            <ul>
                {datas?.map((v: any) => {
                    return (
                        <li key={v.USER_NAME}>
                            {v.USER_ID} /{v.USER_NAME}
                        </li>
                    );
                })}
            </ul>
            {/* <h2>get 프로시저 API TEST</h2>
            <ul>
                {Pdatas?.map((v: any) => {
                    return (
                        <li key={v.USER_NAME}>
                            {v.USER_ID} /{v.USER_NAME}
                        </li>
                    );
                })}
            </ul> */}
        </div>
    );
}

/**
 * getServerSideProps :: 매 요청 마다 데이터가 반드시 패칭되어야 하는 페이지를 렌더링 해야할 수 때 사용, 캐시 컨트롤은 헤더가 구성되어 있을 때만 캐싱 됨
 * (요청마다 데이터를 가져올 필요가 없다면 클라이언트사이드, getStaticProps를 사용한다)
 *
 */

export async function getServerSideProps() {
    const res = await axios.get("http://localhost:3000/api/database");
    // const Pres = await axios.get("http://localhost:3000//procedure", {
    //     params: {
    //         RETURN_RESULT: "",
    //         RETURN_ERR: "",
    //         RETURN_ERR_MSG: "",
    //     },
    // });

    const data = res.data;
    // const Pdata = Pres.data;

    return { props: { data } };
}

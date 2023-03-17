import Link from "next/link";
import { useRouter } from "next/router";

export default function name() {
    const router = useRouter();

    console.log(router.query.name);

    return (
        <div>
            <h2>동적 라우터 테스트 페이지</h2>
            <Link href={"/"}>move</Link>
        </div>
    );
}

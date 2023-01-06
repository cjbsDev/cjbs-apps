import { Button } from "ui";
import testImgUrl from "../img/ezbiocloudLogoBeta.png"
import Image from 'next/image';

export default function Web() {
  return (
    <div>
      <h1>Websssss</h1>
      <Button onClick={() => console.log('click')}>ㄲㄲㄲㄲButton</Button>
      <p>New Feature test 1234%%!</p>
      {/*<p>{process.env.NEXT_PUBLIC_API_URL}</p>*/}
      {/*<p>{process.env.NEXT_PUBLIC_EZMX_ID_AES_KEY}</p>*/}
      <Image src={testImgUrl} alt="This is Test Alt!." />
    </div>
  );
}

import { Button } from "ui";
import testImgUrl from "../img/ezbiocloudLogoBeta.png"
import Image from 'next/image';

export default function Web() {
  return (
    <div>
      <h1>Websssss</h1>
      <Button onClick={() => console.log('click')}>ㄲㄲㄲㄲButton</Button>
      <p>New Feature test 1234%%!</p>
      <Image src={testImgUrl} alt="This is Test Alt!." />
      <Button onClick={() => console.log('click1')}>Button1</Button>
      <Button onClick={() => console.log('click2')}>Button2</Button>
      <Button onClick={() => console.log('click3')}>Button3</Button>
    </div>
  );
}

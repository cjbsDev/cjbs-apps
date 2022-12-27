import { Button } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Websssss</h1>
      <Button />
      <p>New Feature test 1234%%!</p>
      <p>{process.env.NEXT_PUBLIC_API_URL}</p>
      <p>{process.env.NEXT_PUBLIC_EZMX_ID_AES_KEY}</p>
    </div>
  );
}

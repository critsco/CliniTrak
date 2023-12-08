import Login_Left from "@/components/Login_Left";
import Login_Right from "@/components/Login_Right";

export default function Login() {
  return (
    <section className="flex w-full justify-between overflow-hidden max-container">
      <Login_Left />
      <Login_Right />
    </section>
  )
}

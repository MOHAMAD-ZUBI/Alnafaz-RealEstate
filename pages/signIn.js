import SignInForm from "@/components/auth/SignInForm";
import Image from "next/image";
import Link from "next/link";
import PageWrapper from "@/components/Shared/PageWrapper";
export default function LoginPage() {
  return (
    <PageWrapper>
      <div id="authPageBackground" className="flex justify-center items-center">
        <div className="bg-white relative  overflow-hidden custom-shadow rounded-2xl flex max-sm:flex-col-reverse justify-between mx-4 flex-row max-w-lg  w-full">
          <div className="w-full p-8 flex flex-col  justify-center align-middle items-center">
            <Link href="/">
              <Image
                alt="Alnafaz"
                src={require("../public/logo.png")}
                className="h-16 w-24 mb-4"
              />
            </Link>
            <h1 className="text-3xl mb-10 text-primaryColor">
              Welcome to Alnafaz
            </h1>
            <SignInForm />
            <div className="flex flex-row items-center gap-x-2 w-full">
              <p>Don't have an account yet?</p>
              <Link
                className="text-primaryColor hover:text-primaryHoverColor duration-500"
                href="/signUp"
              >
                Sign up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}

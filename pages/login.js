import Layout from "../Layout";

/**
 * A simple login page used in the demo project. Because this static
 * implementation does not provide actual authentication, the page instructs
 * visitors to use the original ReVive website for registration and login.
 */
export default function LoginPage() {
  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-8">
        <h1 className="text-4xl font-bold mb-4 text-white">Authentication Unavailable</h1>
        <p className="text-white/70 max-w-xl">
          This preview of ReVive Earth is a static demonstration. To sign up or
          log in to the official ReVive platform, please visit
          <a
            href="https://reviveearth.base44.app"
            className="text-emerald-400 underline ml-1"
          >
            the live ReVive website
          </a>.
        </p>
      </div>
    </Layout>
  );
}
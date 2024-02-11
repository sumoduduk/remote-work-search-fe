export default function AboutPage() {
  return (
    <div className="max-w-3xl m-auto p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">About Me</h1>
        <div className="w-16 h-1 bg-foreground"></div>
      </div>
      <div className="rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">My Mission</h2>
        <p className="">
          My goal is to make finding remote work easy. I scour the internet to
          find the latest remote jobs so you don't have to.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">My Story</h2>
        <p className="">
          I started this site after struggling to find remote work ourselves. I
          knew there had to be a better way. So i built this site to share
          quality remote job leads, so you can find your next great opportunity.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Get to know me</h2>
        <p className="">
          I'm a remote software developers. I love building useful products that
          help make working remotely easier. Kindly visit my other portofolio at{" "}
          <a
            href="https://abdurachmaniqbal.my.id"
            target="_blank"
            className="underline text-white"
          >
            abdurachmaniqbal.my.id
          </a>
        </p>
      </div>
    </div>
  );
}

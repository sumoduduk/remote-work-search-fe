export const AboutPage = () => {
  return (
    <div className="max-w-3xl m-auto p-4">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-foreground">About Us</h1>
        <div className="w-16 h-1 bg-foreground"></div>
      </div>
      <div className="rounded-lg shadow p-6">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="">
          Our goal is to make finding remote work easy. We scour the internet to
          find the latest remote jobs so you don't have to.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Our Story</h2>
        <p className="">
          We started this site after struggling to find remote work ourselves.
          We knew there had to be a better way. So we built this site to share
          quality remote job leads, so you can find your next great opportunity.
        </p>

        <h2 className="text-2xl font-bold mb-4 mt-8">Meet the Team</h2>
        <p className="">
          We're a small team of remote developers spread around the world. We
          love building useful products that help make working remotely easier.
        </p>
      </div>
    </div>
  );
};

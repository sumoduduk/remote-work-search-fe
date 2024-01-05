export function SiteFooter() {
  return (
    <footer className="border-t py-6 md:py-0">
      <div className="container flex flex-col items-center justify-center gap-4 md:h-24 md:flex-row">
        <div className="flex flex-col items-center min-w-full gap-4 px-8 md:gap-2 md:px-0">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            Made with ❤️
          </p>
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="underline"
              href="https://abdurachmaniqbal.my.id/"
            >
              Iqbal Abdurachman
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

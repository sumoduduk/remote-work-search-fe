import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";

import "~/index.css";
import NavigationBar from "./components/navigation-bar/NavigationBar";
import SiteFooter from "./components/footer";
import { ThemeProvider } from "./providers/theme-provider";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="manifest.json" />
        <Meta />
        <Links />
      </head>
      <body className="flex flex-col min-h-screen text-primary">
        <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
          <NavigationBar />
          <Outlet />
          <SiteFooter />
          <ScrollRestoration />
          <Scripts />
        </ThemeProvider>
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <p>Loading...</p>
        <Scripts />
      </body>
    </html>
  );
}

import "@/styles/globals.css";
import { Theme } from "@radix-ui/themes";
import "@radix-ui/themes/styles.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Theme radius="large" scaling="95%">
			<Component {...pageProps} />
		</Theme>
	);
}

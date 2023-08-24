import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html dir="rtl" className="h-full bg-white">
        <Head>
          {/*   https://flowbite.com/docs/customize/dark-mode/   */}
          {/*   and chat gpt   */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                                // On page load or when changing themes, best to add inline in \`head\` to avoid FOUC
                                if (localStorage.getItem('color-theme') === 'dark' || (!('color-theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                                    document.documentElement.classList.add('dark');
                                } else {
                                    document.documentElement.classList.remove('dark')
                                }
                            `,
            }}
          />
        </Head>
        <body className="h-full overflow-y-scroll">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
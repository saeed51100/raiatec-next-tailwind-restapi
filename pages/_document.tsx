import Document, { Html, Head, Main, NextScript } from 'next/document';
class MyDocument extends Document {
    render() {
        return (
            <Html dir="rtl" className="h-full bg-white">
                <Head />
                <body className="h-full">
                <Main />
                <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
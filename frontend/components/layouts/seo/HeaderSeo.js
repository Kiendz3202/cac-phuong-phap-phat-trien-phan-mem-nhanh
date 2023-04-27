import Head from 'next/head';
import React from 'react';

function HeaderSeo({ title, description, url, siteName, image, children }) {
	// Giá vàng, tỷ giá ngoại tệ, tỷ giá ngân hàng, giá dầu thô, giá vàng thế giới, tỷ giá hối đoái, giá tiền ảo, tiền điện tử, giá cổ phiếu các sàn
	return (
		<Head>
			<meta charSet="UTF-8" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1.0"
			/>
			<meta httpEquiv="X-UA-Compatible" content="ie=edge" />
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta httpEquiv="content-language" content="vi"></meta>
			<meta name="google" content="nositelinkssearchbox" />
			<meta property="og:locale" content="vi_VN" />
			<meta property="og:type" content="vi_VN" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta
				property="og:url"
				content={`${process.env.NEXT_PUBLIC_FE_URL}${url}`}
			/>
			<meta
				property="og:site_name"
				content={process.env.NEXT_PUBLIC_SITE_NAME}
			/>
			<meta property="og:image" content={image} />
			<meta property="og:image:width" content="800" />
			<meta property="og:image:height" content="420" />
			<meta property="og:image:type" content="image/jpeg" />
			{children}
		</Head>
	);
}

export default HeaderSeo;

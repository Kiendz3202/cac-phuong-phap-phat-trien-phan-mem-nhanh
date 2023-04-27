import ManyBanksPriceTable from '@components/detail/interest/priceTable/ManyBanksPriceTable';
import MainLayout from '@components/layouts/mainLayout';
import HeaderSeo from '@components/layouts/seo/HeaderSeo';
import InterestRateNavigation from '@components/navigation/InterestRateNavigation';
import Head from 'next/head';

function LaiSuatNganHangView() {
	return (
		<>
			<HeaderSeo
				title="Lãi suất ngân hàng"
				description="Tìm hiểu lãi suất mới nhất của các ngân hàng hàng đầu Việt Nam. Tra cứu lãi suất tiền gửi và vay để đầu tư và vay vốn một cách thông minh. So sánh lãi suất và lựa chọn sản phẩm tài chính phù hợp với nhu cầu của bạn."
				url="/lai-suat-ngan-hang"
			/>
			<MainLayout>
				<div className="mt-[1rem] lg:mt-[4.6rem] mb-[2.5rem]">
					<InterestRateNavigation />
					<div className=" h-auto mb-[2.5rem]  bg-white-text rounded-[1.5rem] px-[3.2rem] pb-[3.2rem] shadow-shadow-custom">
						<ManyBanksPriceTable />
					</div>
				</div>
			</MainLayout>
		</>
	);
}

export default LaiSuatNganHangView;

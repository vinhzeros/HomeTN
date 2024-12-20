import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 py-8 flex">
      <div className="container mx-auto px-4">
      
        <div className="flex flex-wrap justify-between">
          <div className="mb-4">
          <img src="image/logo1.png" className="w-52 h-42" alt="" />
            <div className="flex space-x-4 mt-2 items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M15.725 22v-7.745h2.6l.389-3.018h-2.99V9.31c0-.874.243-1.47 1.497-1.47h1.598v-2.7a21 21 0 0 0-2.33-.12c-2.304 0-3.881 1.407-3.881 3.99v2.227H10v3.018h2.607V22H3.104C2.494 22 2 21.506 2 20.896V3.104C2 2.494 2.494 2 3.104 2h17.792C21.506 2 22 2.494 22 3.104v17.792c0 .61-.494 1.104-1.104 1.104z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1536 1536"><path fill="currentColor" d="M1280 482q-56 25-121 34q68-40 93-117q-65 38-134 51q-61-66-153-66q-87 0-148.5 61.5T755 594q0 29 5 48q-129-7-242-65T326 422q-29 50-29 106q0 114 91 175q-47-1-100-26v2q0 75 50 133.5T461 885q-29 8-51 8q-13 0-39-4q21 63 74.5 104t121.5 42q-116 90-261 90q-26 0-50-3q148 94 322 94q112 0 210-35.5t168-95t120.5-137t75-162T1176 618q0-18-1-27q63-45 105-109m256-194v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1536 1536"><path fill="currentColor" d="M917 777q0-26-6-64H549v132h217q-3 24-16.5 50T712 948t-66.5 44.5T549 1010q-99 0-169-71t-70-171t70-171t169-71q92 0 153 59l104-101Q698 384 549 384q-160 0-272 112.5T165 768t112 271.5T549 1152q165 0 266.5-105T917 777m345 46h109V713h-109V603h-110v110h-110v110h110v110h110zm274-535v960q0 119-84.5 203.5T1248 1536H288q-119 0-203.5-84.5T0 1248V288Q0 169 84.5 84.5T288 0h960q119 0 203.5 84.5T1536 288"/></svg>
            </div>
            <img src="https://elise.vn/media/wysiwyg/bocongthuong.png" className="w-34 h-20 items-center justify-center" />
          </div>

          {/* Main Pages */}
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2">Tổng đài hỗ trợ</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Gọi mua: 1900 232 460 (8:00 - 21:30)</a></li>
              <li><a href="#" className="hover:underline">Khiếu nại: 1800.1062 (8:00 - 21:30)</a></li>
              <li><a href="#" className="hover:underline">Bảo hành: 1900 232 464 (8:00 - 21:00)</a></li>
             
            </ul>
          </div>

          {/* Policy */}
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2">Về công ty</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Giới thiệu công ty</a></li>
              <li><a href="#" className="hover:underline">Tuyển dụng</a></li>
              <li><a href="#" className="hover:underline">Gửi góp ý, khiếu nại</a></li>
              <li><a href="#" className="hover:underline">Tìm cửa hàng</a></li>
            </ul>
          </div>

          {/* Categories */}
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2">Thông tin khác</h4>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Tích điểm Quà tặng VIP</a></li>
              <li><a href="#" className="hover:underline">Lịch sử mua hàng</a></li>
              <li><a href="#" className="hover:underline">DV vệ sinh thiết bị</a></li>
              <li><a href="#" className="hover:underline">Tìm hiểu về mua trả chậm</a></li>
              <li><a href="#" className="hover:underline">Chính sách bảo hành</a></li>
            </ul>
          </div>

          {/* Subscribe */}
          <div className="mb-4">
            <h4 className="text-md font-semibold mb-2">Theo dỗi website</h4>
            <p className="text-sm mb-4">Hãy đăng ký nhận bản tin của chúng tôi </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Nhập địa chỉ Email"
                className="px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-gray-500"
              />
              <button
                type="submit"
                className="bg-black text-white px-4 py-2 rounded-r-md hover:bg-gray-800"
              >
                ĐĂNG KÝ
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 border-t pt-4 flex justify-between items-center text-sm ">
          <p>&copy; 2018.Cửa hàng Electronic Store Địa chỉ: 128 Trần Quang Khải, P.Tân Định, Q.1, TP.Hồ Chí Minh. Địa chỉ liên hệ và gửi chứng từ: Lô T2-1.2, Đường D1, Đ. D1, P.Tân Phú, TP.Thủ Đức, TP.Hồ Chí Minh. Điện thoại: 028 38125960. Email: cskh@electronicstore.com.</p>
          <div className="flex items-center space-x-4  justify-center">
           <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 32 32"><path fill="currentColor" d="M26.828 24.572c0 .378-.255.65-.622.65c-.378 0-.622-.289-.622-.65s.244-.65.622-.65c.367 0 .622.289.622.65m-17.267-.65c-.395 0-.622.289-.622.65s.228.65.622.65c.361 0 .605-.272.605-.65c-.006-.361-.244-.65-.605-.65m6.528-.016c-.3 0-.484.194-.528.483h1.061c-.05-.317-.244-.483-.533-.483m5.989.016c-.378 0-.605.289-.605.65s.228.65.605.65c.378 0 .622-.272.622-.65c0-.361-.245-.65-.622-.65m5.883 1.45c0 .017.017.028.017.061c0 .017-.017.028-.017.061c-.017.017-.017.028-.028.044c-.017.017-.028.028-.061.028c-.017.017-.028.017-.061.017c-.017 0-.028 0-.061-.017c-.017 0-.028-.017-.044-.028c-.017-.017-.028-.028-.028-.044c-.017-.028-.017-.044-.017-.061c0-.028 0-.044.017-.061c0-.028.017-.044.028-.061c.017-.017.028-.017.044-.028c.028-.017.044-.017.061-.017c.028 0 .044 0 .061.017c.028.016.044.016.061.028s.011.033.028.061m-.122.078c.028 0 .028-.017.044-.017c.017-.017.017-.028.017-.044s0-.028-.017-.044c-.016 0-.028-.017-.061-.017h-.089v.194h.044v-.078h.017l.061.078h.044zM32 6.278v19.556a2.67 2.67 0 0 1-2.667 2.667H2.666a2.67 2.67 0 0 1-2.667-2.667V6.278a2.67 2.67 0 0 1 2.667-2.667h26.667A2.67 2.67 0 0 1 32 6.278M3.556 14.033c0 4.25 3.45 7.694 7.694 7.694a7.75 7.75 0 0 0 4.25-1.283c-4.05-3.294-4.022-9.511 0-12.806a7.7 7.7 0 0 0-4.25-1.283c-4.244-.005-7.694 3.444-7.694 7.678M16 20.078c3.917-3.056 3.9-9.011 0-12.083c-3.9 3.072-3.917 9.033 0 12.083m-7.906 4.239c0-.483-.317-.8-.817-.817c-.256 0-.528.078-.711.361c-.133-.228-.361-.361-.678-.361a.7.7 0 0 0-.589.3v-.244h-.455v2.039h.455c0-1.05-.139-1.678.5-1.678c.567 0 .456.567.456 1.678h.439c0-1.017-.139-1.678.5-1.678c.567 0 .455.556.455 1.678h.456v-1.278zm2.495-.761h-.439v.244a.8.8 0 0 0-.65-.3c-.572 0-1.011.456-1.011 1.072c0 .622.439 1.072 1.011 1.072c.289 0 .5-.106.65-.3v.256h.439zm2.25 1.422c0-.833-1.272-.456-1.272-.845c0-.317.661-.266 1.028-.061l.183-.361c-.522-.339-1.678-.333-1.678.456c0 .794 1.272.461 1.272.833c0 .35-.75.322-1.15.044l-.194.35c.622.422 1.811.333 1.811-.417zm1.967.516l-.122-.378c-.211.116-.678.244-.678-.228v-.922h.728v-.411h-.728v-.622h-.456v.622h-.422v.406h.422v.928c0 .978.961.8 1.256.605m.738-.744h1.528c0-.9-.411-1.256-.967-1.256c-.589 0-1.011.439-1.011 1.072c0 1.139 1.256 1.328 1.878.789l-.211-.333c-.433.356-1.089.322-1.217-.272m3.284-1.194c-.255-.111-.644-.1-.844.244v-.244h-.456v2.039h.456v-1.15c0-.645.528-.561.711-.467zm.589 1.016c0-.634.645-.839 1.15-.467l.211-.361c-.645-.505-1.817-.228-1.817.833c0 1.1 1.244 1.322 1.817.833l-.211-.361c-.511.361-1.15.145-1.15-.478zm3.705-1.016h-.456v.244c-.461-.611-1.661-.266-1.661.772c0 1.067 1.244 1.372 1.661.772v.256h.456zm1.872 0c-.133-.067-.611-.161-.844.244v-.244h-.439v2.039h.439v-1.15c0-.611.5-.572.711-.467zm2.239-.828h-.439V23.8c-.456-.605-1.661-.283-1.661.772c0 1.078 1.25 1.366 1.661.772v.256h.439zm.423-4.172v.256h.044v-.256h.105v-.044h-.256v.044zm.366 6.877c0-.028 0-.061-.016-.089c-.017-.017-.028-.044-.044-.061s-.044-.028-.061-.044c-.028 0-.061-.017-.089-.017c-.017 0-.044.017-.078.017a.3.3 0 0 0-.061.044c-.028.016-.044.044-.044.061c-.017.028-.017.061-.017.089c0 .017 0 .044.017.078c0 .017.017.044.044.061a.2.2 0 0 0 .061.044c.028.016.061.016.078.016c.028 0 .061 0 .089-.016c.017-.017.044-.028.061-.044s.028-.044.044-.061c.016-.033.016-.061.016-.078m.178-6.927h-.078l-.089.194l-.089-.194h-.078v.3h.044v-.228l.089.194h.061l.078-.194v.228h.061zm.244-4.473c0-4.234-3.45-7.683-7.694-7.683a7.75 7.75 0 0 0-4.25 1.283c4.006 3.295 4.067 9.528 0 12.806a7.73 7.73 0 0 0 4.25 1.283c4.244.006 7.694-3.439 7.694-7.689"/></svg>
           <svg xmlns="http://www.w3.org/2000/svg" width="3.5em" height="3em" viewBox="0 0 36 24"><path fill="currentColor" d="M33.6 24H2.4A2.4 2.4 0 0 1 0 21.6V2.4A2.4 2.4 0 0 1 2.4 0h31.2A2.4 2.4 0 0 1 36 2.4v19.2a2.4 2.4 0 0 1-2.4 2.4m-15.76-9.238l-.359 2.25a6.8 6.8 0 0 0 2.903.531h-.011a5.17 5.17 0 0 0 3.275-.933l-.017.011a3.09 3.09 0 0 0 1.258-2.485v-.015v.001c0-1.1-.736-2.014-2.187-2.72a7.7 7.7 0 0 1-1.132-.672l.023.016a.75.75 0 0 1-.343-.592v-.002a.74.74 0 0 1 .379-.6l.004-.002a1.95 1.95 0 0 1 1.108-.257h-.006h.08l.077-.001c.644 0 1.255.139 1.806.388l-.028-.011l.234.125l.359-2.171a6.2 6.2 0 0 0-2.277-.422h-.049h.003a5.07 5.07 0 0 0-3.157.932l.016-.011a2.92 2.92 0 0 0-1.237 2.386v.005c-.01 1.058.752 1.972 2.266 2.72c.4.175.745.389 1.054.646l-.007-.006a.84.84 0 0 1 .297.608v.004c0 .319-.19.593-.464.716l-.005.002c-.3.158-.656.25-1.034.25h-.046h.002h-.075c-.857 0-1.669-.19-2.397-.53l.035.015l-.343-.172zm10.125 1.141h3.315q.08.343.313 1.5H34L31.906 7.372h-2a1.33 1.33 0 0 0-1.357.835l-.003.009l-3.84 9.187h2.72l.546-1.499zM14.891 7.372l-1.626 10.031h2.594l1.625-10.031zM4.922 9.419l2.11 7.968h2.734l4.075-10.015h-2.746l-2.534 6.844l-.266-1.391l-.904-4.609a1.04 1.04 0 0 0-1.177-.844l.006-.001H2.033l-.031.203c3.224.819 5.342 2.586 6.296 5.25A5.7 5.7 0 0 0 6.972 10.8l-.001-.001a6.1 6.1 0 0 0-2.007-1.368l-.04-.015zm25.937 4.421h-2.16q.219-.578 1.032-2.8l.046-.141l.16-.406q.097-.25.14-.406l.188.859l.593 2.89z"/></svg>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
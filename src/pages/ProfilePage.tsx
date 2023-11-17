const ProfilePage = () => {
  return (
    <div className="flex justify-center items-center py-20 bg-[url('https://i0.wp.com/niuyie.com/wp-content/uploads/2018/08/50-Beautiful-and-Minimalist-Presentation-Backgrounds-02.jpg?ssl=1')] bg-cover">
      <div className="profile">
        <div className="head">
          <div className="banner">
            <img
              src="https://photo-cms-baophapluat.epicdn.me/w840/Uploaded/2023/nykxxqymrk/2021_11_23/starry-night-1093721-960-720-7985.jpeg"
              alt=""
            />
          </div>
          <div className="avatar">
            <img
              src="https://scontent.fhan14-4.fna.fbcdn.net/v/t39.30808-6/329727137_1366057400835481_5429393417277795760_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=GZ8x2Wq6UCEAX_zvAP-&_nc_ht=scontent.fhan14-4.fna&oh=00_AfAXIbGtwHervuqPWAd1pwT7Ms8kKf98xe2frlx4l1-uRw&oe=655A7CD0"
              alt=""
            />
          </div>
        </div>
        <div className="content">
          <p>
            <strong>Họ tên:</strong> Phạm Công Gia Khánh
          </p>
          <p>
            <strong>Tuổi:</strong> 23
          </p>
          <p>
            <strong>Quê quán:</strong> Hải Dương
          </p>
          <p>
            <strong>Định hướng:</strong> Front-end developer
          </p>
          <p>
            <strong>Ngôn ngữ đã học:</strong> C, Java, PHP, JavaScript
          </p>
          <div className="button">
            <a
              href="https://www.facebook.com/profile.php?id=100021782146097&mibextid=LQQJ4d"
              target="_blank"
            >
              <button>Folow me !</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

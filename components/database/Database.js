export const COLORS = {
  white: "#ffffff",
  black: "#000000",
  green: "#00AC76",
  red: "#C04345",
  backgroundLight: "#F0F0F3",
  backgroundMedium: "#B9B9B9",
  backgroundDark: "#777777",
  blue: "#5D5FEE",
  grey: "#BABBC3",
  light: "#F3F4FB",
  darkBlue: "#7978B5",
  blueLight: "#EEF6FF",
  orangeLight: "#FFF7F3",
  pinkLight: "#FEE4E8",
  primaryColor: "#262E34",
};

export const CATEGORIES = [
  { id: 1, name: "Sách", color: COLORS.blueLight },
  { id: 2, name: "Tiểu thuyết", color: COLORS.pinkLight },
  { id: 3, name: "Truyện", color: COLORS.orangeLight },
  { id: 4, name: "Ký sự", color: COLORS.blueLight },
];

export const Items = [
  {
    id: 1,
    category: 1,
    author: "Phan Khắc Nghệ",
    productName: "Tự Học Ứng Dụng Di Truyền Học, Tiến Hóa Và Sinh Thái",
    productPrice: 150000,
    description:
      "Tự Học Ứng Dụng Di Truyền Học, Tiến Hóa Và Sinh Thái được viết theo các chuyên đề kiến thức từ cơ bản đến nâng cao. Cuốn sách sẽ giúp các em học sinh lớp 12 đạt điểm 7+, 8+ khi ôn thi đại học. Trong mỗi chủ đề, tác giả viết theo một cấu trúc thống nhất và tin chắc rằng với trình tự sắp xếp này sẽ giúp độc giả dễ dàng tiếp cận và từng bước nắm chắc toàn bộ kiến thức mỗi chuyên đề ỨNG DỤNG DI TRUYỀN – TIẾN HÓA VÀ SINH THÁI sẽ là cuốn tài liệu đặc biệt quan trọng giúp các em học sinh nâng cao kiến thức Sinh học THPT và giúp giáo viên nâng cao hiệu quả dạy học. Dù rất tâm huyết và dành nhiều thời gian để biên soạn, song do những hạn chế khách quan và chủ quan nên cuốn sách tự học môn Sinh học THPT có thể còn có thiếu sót nhất định, tác giả rất mong nhận được các ý kiến góp ý để trong lần tái bản sau cuốn sách được hoàn thiện hơn.",
    isOff: true,
    offPercentage: 10,
    productImage: require("../database/images/books/sach-tu-hoc-ung-dung-di-truyen-hoc-tien-hoa-va-sinh-thai.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/books/sach-tu-hoc-ung-dung-di-truyen-hoc-tien-hoa-va-sinh-thai.jpg"),
    ],
  },
  {
    id: 2,
    category: 1,
    author: "Lê Khải Việt",
    productName: "Chuyến Bay Tháng Ba",
    productPrice: 60000,
    description:
      "Cuốn sách là tác phẩm đầu tay của tác giả Lê Khải Việt. Với 13 truyện ngắn cùng một lối viết tỉnh táo và khúc chiết, tác giả đã làm hiện lên ở đó những số phận con người. Và, dù ít dù nhiều, thì cuộc chiến kết thúc tại Việt Nam năm 1975 cũng xuất hiện trong mỗi truyện, lật lại những mảnh ký ức cũ xưa để từ đó đem đến cho người đọc những cảm nhận riêng. “ Thành phố biến màu, ngã ba biên giới bụi bặm, văn khố với những tài liệu phủ bụi, tung tích những trận đánh, những cựu binh mắc kẹt trong cuộc lần tìm ký ức, bức ảnh về chuyến bay định mệnh... là các dấu chỉ tản mát mà hợp nhất để quá khứ được tương thông theo cách của văn chương. Không với tham vọng phát lộ rõ thêm về cuộc chiến hôm qua (các sử gia chân chính sẽ làm điều này), người viết biết tiết chế và tránh diễn giải về những lằn ranh hư ảo; xác lập một lối viết gọn gàng, tỉnh táo, ấn tượng với các lớp chuyển bối cảnh khéo léo. Ở đó, cuộc sống tinh thần đa chiều, phức hợp của thực tại hậu chiến được hiện ra một cách tự nhiên.",
    isOff: false,
    productImage: require("../database/images/books/chuyen-bay-thang-ba.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/books/chuyen-bay-thang-ba.jpg"),
    ],
  },
  {
    id: 3,
    category: 2,
    author: "	Sơn Nam",
    productName:
      "Đồng Bằng Sông Cửu Long - Nét Sinh Hoạt Xưa, Văn Minh Miệt Vườn",
    productPrice: 55000,
    description:
      "Đây là tập sách gồm những truyện ngắn của nhà Nam Bộ học Sơn Nam về những sinh hoạt truyền thống của nhân dân Đồng bằng sông Cửu Long thông qua những lễ hội và hò vè đối đáp cũng những sinh hoạt của cư dân vùng Miệt Vườn Nam Bộ trong lịch sử hình thành, xây dựng và phát triển vùng đất phía Nam của Tổ quốc, ưu tiên nghiên cứu các đặc tính dân tộc vùng Miệt Vườn có khác nhiều so với cư dân Miệt Thứ - là vùng đất mới bồi lấp khai khẩn với những hạn chế về địa lý.",
    isOff: true,
    offPercentage: 18,
    productImage: require("../database/images/books/nxbtre-full-13482018-094847.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/books/nxbtre-full-13482018-094847.png"),
    ],
  },
  {
    id: 4,
    category: 2,
    author: "Nguyễn Huy Minh",
    productName: "Đi Trẩy Nước Non",
    productPrice: 135000,
    description:
      "Những câu chuyện, tình tiết trong cuốn sách đưa người đọc tới mọi miền trên tổ quốc bằng nhiều hình ảnh, chi tiết, sự kiện lạ lùng, độc đáo: Như ở miền Lô Lô Chải - bản tận cùng phương Bắc; “Điện Biên Phủ dưới nước” -  Chiến dịch End Sweep; Chùa Sùng Khánh - địa chỉ thiêng ven đường thiên lý… Đọc Đi Trẩy Nước Non của Huy Minh, tôi thấy từng con người, từng số phận và từng cảnh đời cứ như hiện hữu trước mắt sống động, mênh mang. Đọng lại trong tôi sau mỗi tác phẩm ký và phóng sự của em là rất nhiều cảm giác đan xen: Ngạc nhiên, háo hức, đôi khi buồn ghê gớm nhưng lạ lùng là không có cảm giác thất vọng, có lẽ, bởi cái tình người thấm đẫm trong từng câu chuyện của Minh.",
    isOff: false,
    productImage: require("../database/images/books/di-tray-nuoc-non.jpg"),
    isAvailable: true,
    productImageList: [
      require("../database/images/books/di-tray-nuoc-non.jpg"),
    ],
  },
  {
    id: 5,
    category: 2,
    author: "Lư Tư Hạo",
    productName: "Đáp Án Của Thời Gian",
    productPrice: 92000,
    description:
      "Câu chuyện bắt đầu từ thời thơ ấu chẳng mấy vui vẻ của chàng trai tên Trần Dịch Dương, từ khi sinh ra cậu đã không được khỏe mạnh, phải lớn lên trong sự thờ ơ của cha mẹ, sự cô lập của bạn bè, chỉ biết bám víu vào tình yêu thương của bà nội. Trong những năm tháng niên thiếu đáng ra phải rực rỡ tươi đẹp ấy, Trần Dịch Dương mặc kẹt trong một chiếc lồng kiên cố được tạo ra bởi thành kiến và hiểu lầm, không một lối thoát. Bước vào cánh cửa đại học – một xã hội thu nhỏ, cậu cố gắng cười cười nói nói, cố gắng gia nhập vào những bữa tiệc không hồi kết, cố gắng đi tìm nơi mà bản thân thực sự thuộc về, nhưng cuối cùng vẫn cứ loay hoay lạc bước trong những tháng ngày đằng đẵng. Thế nhưng trên con đường tưởng như kéo dài vô tận đó, cậu chưa từng một lần dừng lại. Và rồi thời gian cũng cho cậu một đáp án. Đó chính là Đổng Tiểu Mãn – cô gái duy nhất vẫn luôn ngồi trên chuyến xe cuộc đời của Trần Dịch Dương, trải qua nhiều trạm dừng song chưa từng một lần bước xuống, một mực chờ đợi cậu nhìn về phía mình. Thời gian đã lấy mất thời niên thiếu rực rỡ của Trần Dịch Dương, để rồi trả lại cho cậu ‘một người có cùng nhịp bước’ mà cậu vẫn luôn kiếm tìm. Chúng ta ai cũng từng phải hứng chịu những trận mưa yên ắng trên biển rộng, phải lớn lên theo cách khắc nghiệt và đau lòng. Nhưng sau cùng, mọi điều xảy ra trong quá khứ sẽ tạo thành chúng ta của hiện tại. Chẳng một ai có quyền năng quay ngược thời gian, việc mà chúng ta làm chỉ có thể là cố gắng sống tốt và chờ đợi đáp án của nó. Bởi thời gian tuy chưa từng một lần lên tiếng, nhưng sẽ là đáp án cho tất cả. Với cách kể chuyện chậm rãi mà dịu dàng bằng những con chữ như chạm đến ngóc ngách trái tim độc giả, Lư Tư Hạo đã viết nên một cuốn tiểu thuyết đầy rung cảm về tuổi trẻ - Đáp Án Của Thời Gian. Đây không phải một cuốn sách bạn có thể đọc trong một buổi tối, cũng không phải loại tiểu thuyết bạn có thể đọc lướt cho xong. Hãy nhâm nhi cuốn sách này tựa một tách trà chiều, bởi sau chút đắng chát chính là vị ngọt nơi đầu lưỡi. Giống như sau khi kiên nhẫn chờ đợi, thời gian sẽ tìm mọi cách mang đến cho bạn một đáp án mà thôi.",
    isOff: false,
    productImage: require("../database/images/books/sach-dap-an-cua-thoi-gian.png"),
    isAvailable: false,
    productImageList: [
      require("../database/images/books/sach-dap-an-cua-thoi-gian.png"),
    ],
  },
  {
    id: 6,
    category: 2,
    author: "Gào",
    productName: "Tự Sát",
    productPrice: 55000,
    description:
      "Câu chuyện trong Tự Sát lần này rất khác với những câu chuyện của Gào mà người ta đã quen từ trước, ngay từ những tình tiết đầu tiên đã lạ và ám ảnh. Câu chuyện phát triển một cách tự nhiên như chính những nhịp thở cuộc sống của Gào, tự nó đòi hỏi nó phải có một tầm vóc xứng đáng hơn. Đáng lẽ sẽ có một cái kết mở của sự bế tắc sau ba chương, nhưng chính nhân vật của Gào không thỏa mãn, mà tò mò muốn biết tương lai của mình ra sao. Và Gào đã viết. Mười ba chương tạo thành một câu chuyện hoàn chỉnh. Một câu chuyện về những khoảnh khắc u tối, khi ta dần đánh mất đi những người xung quanh; để rồi đánh mất chính bản thân mình. Một cái kết bất ngờ.",
    isOff: false,
    productImage: require("../database/images/books/tu-sat-1.gif"),
    isAvailable: true,
    productImageList: [require("../database/images/books/tu-sat-1.gif")],
  },
  {
    id: 7,
    category: 3,
    author: "Nhiêu Tuyết Mạn",
    productName: "Như Gần Như Xa",
    productPrice: 59000,
    description:
      "Tình yêu đầu tiên luôn đẹp và như đốm lửa âm ỉ, âm thầm để lại vết bỏng trong trái tim con người… cho đến khi được một mối tình khác chữa lành. ...Sau mối tình đầu đầy đau khổ, liệu cô gái xinh đẹp Thiên Ý có giữ được trái tim mình trước chàng trai với giọng hát ngón đàn tài hoa Lăng Hạ? Liệu họ có đến được với nhau sau bao hiểu lầm và trắc trở? Hay tình yêu này lúc nào cũng không thể nắm bắt, như gần như xa. Được mệnh danh là “Nữ hoàng văn học tuổi thanh xuân”, nữ nhà văn Nhiêu Tuyết Mạn đã viết rất nhiều truyện ngắn văn học dành cho phái nữ. Các tác phẩm của cô đầy ắp những tình tiết xúc động, giọng văn đẹp, để lại cảm xúc sâu sắc trong lòng người.",
    isOff: true,
    offPercentage: 10,
    productImage: require("../database/images/books/nhu-gan-nhu-xa1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/books/nhu-gan-nhu-xa1.png"),
    ],
  },
  {
    id: 8,
    category: 3,
    author: 'Hồ Mộng Nhã Uyển',
    productName: "Hoảng Tử Biển",
    productPrice: 50000,
    description:
      "Cuốn sách Hoàng Tử Biển do tác giả Hồ Mộng Nhã Uyển biên soạn là cuốn sách tản văn nói về  một câu chuyện tình đẹp, với một mô típ đơn giản, tạo được nhiều thiện cảm với người đọc ngay những dòng chữ đầu tiên.  Câu chuyện giữa thiên nhiên và con người là câu chuyện đã được kể rất nhiều nhưng Hồ Mộng Nhã Uyển có một cách kể mới lạ và đặc biệt hơn, để khi đọc ta thấy, Hoàng Tử Biển bềnh bồng như những cơn sóng và mênh mang như đại dương. Chuyện tình trong Hoàng Tử Biển như là một lời ước, lời ước cho những câu chuyện tình bao giờ  cũng có những kết thúc thật đẹp. Dĩ nhiên rằng trên cuộc đời này không phải lời ước nào cũng có thể trở thành hiện thực. Nhưng khi viết Hoàng Tử Biển, tôi khám phá ra rằng: một khi tôi cởi bỏ được những lớp áo khoác của định kiến và để cho các nhân vật hồn nhiên phơi trải cảm xúc thật dưới ánh mặt trời, tôi có thể tạo ra bất cứ điều gì mình muốn, ngay cả một kết thúc đầy hạnh phúc! Và khi nhân vật của mình được hạnh phúc thì tôi cũng vui lây. Và cứ thế, những câu chuyện cổ tích lại được tiếp tục kể. Tôi đã có những đêm thức trắng để vẽ hoặc viết như một cách thế trải những cảm xúc ra với đời.",
    isOff: false,
    productImage: require("../database/images/books/nhu-gan-nhu-xa1.png"),
    isAvailable: true,
    productImageList: [
      require("../database/images/books/nhu-gan-nhu-xa1.png"),
    ],
  },
];

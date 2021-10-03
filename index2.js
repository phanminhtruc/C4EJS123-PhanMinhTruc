BT 1:
Khái niệm var, let, const trong JS và sự khác biệt:

A. Giống nhau:
Đều được dung để khai báo 1 giá trị nào đó của 1 biến.

B. Khác nhau:
let 
+. KHÔNG CẦN giá trị khởi tạo và được giới hạn trong 1 block lệnh ( các dòng lệnh giữa 2 dấu {} ) 
+. CÓ GIỚI HẠN trong phạm vi khối lệnh (Block scope)
+. CÓ THỂ gán lại nhưng KHÔNG THỂ khai báo lại giá trị của biến đã khai báo.
+. GIỚI HẠN trong PHẠM VI HÀM
+. KHÔNG CÓ thuộc tính toàn cục (nghĩa là toàn bộ chương trình)

Điều này sẽ dẫn tới việc nếu sử dụng let trước giá trị khởi tạo thì sẽ bị báo lỗi Reference Error
Let cho phép chúng ta cập nhật lại giá trị của biến chứ không cho phép khai báo lại biến đó

var
+. CÓ giá trị khởi tạo là không xác định (undefined) 
+. KHÔNG CÓ giới hạn trong 1 block lệnh nào 
+. CÓ giá trị cho toàn bộ chương trình.

const
+. KHÔNG THỂ gán lại giá trị của biến đã gán
+. KHÔNG THỂ khai báo lại giá trị của biến đã khai báo
+. KHÔNG CÓ giới hạn trong phạm vi hàm
+. KHÔNG CÓ giới hạn trong phạm vi khối


BT 2:
Boolean:
Định nghĩa:
+. Boolean là kiểu dữ liệu LOGIC, chỉ có 2 giá trị là TRUE hoặc FALSE
+. Boolean là đối tượng đại diện cho kiểu dữ liệu Boolean
+. Giá trị Boolean của một biểu thức là nền tảng cho các câu lệnh so sánh
và điều kiện.
+. Giá trị chuỗi rỗng ( phần giá trị giữa 2 dấu "" được mặc định là FALSE )
+. Giá trị Boolean của -0 là FALSE
+. Giá trị Boolean của UNDEFINED là FALSE
Boolean cũng là đối tượng nên cũng có thể được dùng để định nghĩa

*. Ví dụ:
var y = new Boolean(false);
Tuy nhiên, không nên tạo kiểu đối tượng Boolean vì sẽ làm chậm quá trình thực hiện lệnh
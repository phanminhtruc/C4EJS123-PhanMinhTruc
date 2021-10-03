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

BT 3:
A.

for(let x = 0; x < 7;x++) 
 {
     console.log(x);
 }

B.

let n = prompt ('hãy nhập số bạn muốn');
 for(let x = 0; x <n; x++) 
 {
 console.log(x);
 }

C.

let n = prompt ('hãy nhập số bạn muốn');
 for(let x = 3; x <n;x++) 
 {
 console.log(x);
 }

D.

let c = prompt ('hãy nhập số c');
 let n = prompt ('hãy nhập số n');
 for(c; c < n;c++) 
 {
 console.log(c);
}

E.

let c = prompt ('hãy nhập số c');
 let n = prompt ('hãy nhập số n');
 let i =  Number(c);
 for(i; i < n;) 
 {
 console.log(i);
 i = i + 3;
 }

F.

 var c = prompt ('hãy nhập số c');
 var n = prompt ('hãy nhập số n');
 var s = prompt ('hãy nhập số s');
 var m = Number(c);
 var i = Number(s);
 for(m; m < n;) 
 {
 console.log(m);
 m = m + i;
 }

BT 4:

var n = prompt('Nhập giá trị cua N')
var n=giaithua(n)	
var gt = 0
	function giaithua(x)
	{
	var giaithua=1;
	for(var i=1;i<=n;i++)
		{
		giaithua*=i
			}
alert('Giai Thừa bằng '+giaithua)
	}

BT 5:

var tuoi = prompt ('How old are you ?')
 if (tuoi<16)
 {
     console.log('Not enough age to view this content')
 }
 else if(tuoi>= 16)
 {
     console.log('Watch everything you want')
 }

BT 6:

var x = prompt('Enter a number from 0 to 9')
var y = prompt('Enter a number')
var x = 9;
for (y; 4.5<y<9;) {
  console.log('Higher half of 9')
}
    console.log('Lower half of 9') 
  
BT 7:
 
let n = prompt('Nhap vao n =')
let x = prompt('Nhap vao x =')
n = 14;
if ( x<n/2) {
  console.log('Nho hon phan nua cua 14')
}
  else if  (x>n/2) {
  console.log('Lon hon phan nua cua 14')
}

BT 8:


let x = prompt('Nhap mot so tuy y ');
if ( x % 2 == 0 ) {
  console.log('Day la so chan')
} 
else if ( x % 2 == 1 ) {
  console.log('Day la so le')
}
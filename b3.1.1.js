<script>
    let tienVay = Number(prompt("Nhập số tiền vay (triệu đồng):"));
    let laiSuat = Number(prompt("Nhập lãi suất (%/năm):"));
    let n = Number(prompt("Nhập số năm (n):"));

    let tienLai1Nam = tienVay * (laiSuat / 100);
    let tongPhaiTra = tienVay + n * tienLai1Nam;

    alert("Tổng số tiền phải trả sau " + n + " năm là: " + tongPhaiTra + " triệu đồng");
</script>
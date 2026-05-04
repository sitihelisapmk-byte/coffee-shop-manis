document.addEventListener('DOMContentLoaded', function() {
    
    // --- 1. EFEK NAVBAR DI INDEX ---
    const navbar = document.getElementById('navbar');
    if (navbar) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                navbar.classList.add('nav-scrolled');
            } else {
                navbar.classList.remove('nav-scrolled');
            }
        });
    }

    // --- 2. AMBIL DATA PRODUK DI HALAMAN FORM ---
    const urlParams = new URLSearchParams(window.location.search);
    const produk = urlParams.get('produk');
    const displayProduk = document.getElementById('namaProduk');

    if (displayProduk && produk) {
        displayProduk.innerText = produk;
    }

    // --- 3. HANDLE SIMPAN PESANAN ---
    const orderForm = document.getElementById('orderFormMain');
    if (orderForm) {
        orderForm.onsubmit = function(e) {
            e.preventDefault();
            
            const nama = document.getElementById('inputNama').value;
            const qty = document.getElementById('inputJumlah').value;
            
            // Notifikasi Modern
            alert(`✅ PESANAN DISIMPAN!\n\nNama: ${nama}\nProduk: ${produk}\nJumlah: ${qty} Gelas\n\nTerima kasih sudah memesan di Manis.`);
            
            // Kembali ke halaman utama
            window.location.href = "index.html";
        };
    }
});
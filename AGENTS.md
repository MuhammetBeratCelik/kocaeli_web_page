# AGENTS.md — Web Programlama Dönem Projesi Agent Kuralları

Bu dosya, projeyi geliştiren yapay zekâ ajanı için ana davranış kurallarıdır. Her kod değişikliğinden önce bu kuralları oku ve uygula.

## 1. Proje Tanımı

Proje, Türkiye'den seçilen bir ili tanıtan responsive bir web sitesidir.

- Ders: Web Programlama
- Proje türü: Statik tanıtım sitesi
- Seçilen il: Kocaeli
- Grup üyeleri: Muhammet Berat Celik
- Kullanılacak teknolojiler: **Sadece HTML, CSS ve JavaScript**

## 2. Kesin Yasaklar

Aşağıdakileri asla kullanma:

- Bootstrap
- Tailwind CSS
- jQuery
- React, Vue, Angular, Svelte vb. frameworkler
- Hazır tema veya hazır şablon
- CDN ile dış kütüphane
- npm, Vite, Webpack, Parcel gibi build araçları
- Backend, veritabanı, API veya sunucu tarafı kod

Bu proje düz HTML/CSS/JS ile çalışmalıdır.

## 3. Zorunlu İçerik Başlıkları

Sitede aşağıdaki bölümler mutlaka bulunmalıdır:

1. İlin genel tanıtımı
   - Tarihçe
   - Genel bilgiler
2. Coğrafi özellikler
3. Kültürel özellikler ve gelenekler
4. Gezilecek yerler
5. Yöresel yemekler
6. En az 1 görsel galeri bölümü
7. İletişim veya öneri formu

## 4. Zorunlu Teknik Özellikler

Site aşağıdaki teknik şartları sağlamalıdır:

- Responsive tasarım olmalı.
- Mobil, tablet ve masaüstünde bozulmadan görünmeli.
- En az 1 form doğrulama yapılmalı.
  - Boş alan kontrolü
  - E-posta format kontrolü
  - Mesaj uzunluğu kontrolü
- JavaScript ile en az 1 dinamik özellik eklenmeli.
  - Önerilen özellik: galeri slider
  - Alternatif: gezilecek yer filtreleme
  - Alternatif: yöresel yemek arama
- Kodlar temiz, okunabilir ve yorumlarla desteklenmiş olmalı.

## 5. Dosya Yapısı

Önerilen klasör yapısı:

```text
proje/
├── index.html
├── README.md
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── img/
│       ├── hero/
│       ├── gallery/
│       ├── places/
│       └── foods/
└── docs/
    └── rapor-notlari.md
```

Ajan, yeni dosya oluştururken bu yapıya sadık kalmalıdır.

## 6. Kod Yazım Kuralları

### HTML

- Semantic HTML kullan.
- `header`, `nav`, `main`, `section`, `article`, `footer` etiketlerini uygun yerlerde kullan.
- Her görsele anlamlı `alt` metni ekle.
- Form elemanlarında `label` kullan.
- Sayfa başlığı ve meta açıklaması ekle.

### CSS

- Mobile-first yaklaşım kullan.
- CSS değişkenleri kullan.
- Gereksiz tekrarları azalt.
- `!important` kullanmaktan kaçın.
- Layout için Flexbox ve CSS Grid kullan.
- Responsive kırılımlar önerisi:
  - 576px
  - 768px
  - 1024px

### JavaScript

- Vanilla JavaScript kullan.
- Kodları fonksiyonlara ayır.
- Global değişkenleri minimumda tut.
- Form validation kodunu ayrı fonksiyonlar halinde yaz.
- Dinamik özellikler erişilebilirliği bozmasın.
- Hata durumlarında kullanıcıya anlaşılır mesaj göster.

## 7. Tasarım Yaklaşımı

Site modern, sade ve üniversite projesine uygun görünmelidir.

Tasarım dili:

- Temiz navbar
- Büyük hero alanı
- Kart yapıları
- Görsel galeri
- Bilgi kutuları
- Okunabilir tipografi
- Mobilde hamburger menü veya sade açılır menü

Hazır şablon görünümünden kaçın. Tasarım özgün olmalı.

## 8. Çalışma Şekli

Ajan her görevde şu sırayı izlemelidir:

1. İlgili dosyaları oku.
2. Proje şartlarını kontrol et.
3. Küçük ve güvenli değişiklik planı çıkar.
4. Kodu uygula.
5. Responsive, validation ve dinamik özellik kontrolü yap.
6. Yapılan değişiklikleri kısa şekilde açıkla.

## 9. Kalite Kontrol

Her büyük değişiklikten sonra şu kontroller yapılmalıdır:

- Site kütüphanesiz çalışıyor mu?
- HTML/CSS/JS dışında teknoloji eklendi mi?
- Responsive yapı bozuldu mu?
- Form validation çalışıyor mu?
- Dinamik JS özelliği çalışıyor mu?
- Tüm zorunlu içerik başlıkları var mı?
- Görsellerde `alt` metni var mı?
- Türkçe karakterler düzgün görünüyor mu?

## 10. Öğrenci Seviyesine Uygunluk

Kodlar aşırı karmaşık olmamalıdır. Üniversite web programlama dersi seviyesinde, açıklanabilir ve sunumda savunulabilir olmalıdır.

Ajan, gereksiz profesyonel karmaşıklık eklememelidir. Basit, net ve düzgün çalışan çözüm tercih edilmelidir.

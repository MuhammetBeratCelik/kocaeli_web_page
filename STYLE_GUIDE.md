# STYLE_GUIDE.md — Tasarım ve Kod Stili

## Tasarım Hedefi

Site modern, sade, okunabilir ve üniversite projesine uygun görünmelidir.

## Genel Tasarım Prensipleri

- Kalabalık tasarımdan kaçın.
- Kart yapıları kullan.
- Bölümler arasında yeterli boşluk bırak.
- Her bölümün başlığı net olsun.
- Görseller kaliteli ve aynı oranlarda kullanılmaya çalışılsın.

## Renk Sistemi

CSS değişkenleri kullanılmalıdır.

Örnek:

```css
:root {
  --color-primary: #1f5f8b;
  --color-secondary: #f2a65a;
  --color-background: #f8fafc;
  --color-surface: #ffffff;
  --color-text: #1f2937;
  --color-muted: #6b7280;
}
```

Seçilen ile göre renkler değiştirilebilir. Örneğin deniz şehri için mavi tonları, tarihi şehir için kahverengi/altın tonları tercih edilebilir.

## Tipografi

- Başlıklar belirgin olmalı.
- Paragraflar kısa ve okunabilir olmalı.
- Satır aralığı rahat olmalı.
- Sistem fontları kullanılabilir.

Öneri:

```css
body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.6;
}
```

## Layout

- Ana container genişliği sınırlı tutulmalı.
- Kartlar mobilde tek sütun, masaüstünde çok sütun olmalı.
- CSS Grid ve Flexbox kullanılmalı.
- Mobil-first yaklaşım uygulanmalı.

## Bileşenler

### Navbar

- Logo/site adı
- Bölüm linkleri
- Mobilde açılır/kapanır menü

### Hero

- Büyük başlık
- Kısa açıklama
- Buton
- Arka plan görseli veya renk geçişi

### Kartlar

- Görsel
- Başlık
- Kısa açıklama
- Kategori etiketi

### Form

- Label
- Input
- Textarea
- Hata mesajı alanı
- Başarı mesajı alanı

## Kod Stili

- Class isimleri İngilizce veya Türkçe olabilir ama tutarlı olmalı.
- Önerilen class yapısı:

```text
.section
.section-title
.card
.card-image
.card-content
.form-group
.error-message
```

- CSS içerisinde gereksiz tekrar yapılmamalı.
- JavaScript fonksiyon isimleri açıklayıcı olmalı.

Örnek:

```js
function validateContactForm() {
  // ...
}

function showGalleryImage(index) {
  // ...
}
```

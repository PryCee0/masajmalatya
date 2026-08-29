# 🚀 Luna Malatya Masaj & Spa - Google Ads, Search Console & Pazarlama Entegrasyon Rehberi

Bu rehber, **Luna Malatya Masaj & Spa** web sitenizin Google Ads reklamlarını başlatmak, dönüşümleri (Telefon & WhatsApp) kayıpsız ölçmek ve **Google Search Console** ile organik arama sonuçlarında hızlıca indekslenmesini sağlamak için adım adım hazırlanmıştır.

---

## ❓ Stratejik Soru: "Sadece Google Ads Kodu Yeterli mi, Yoksa GTM ve Analytics Zorunlu mu?"

### 📌 Net Cevap: **HAYIR, GTM ve Analytics Bağlamak Zorunlu DEĞİLDİR.**

Sadece Google Ads üzerinden reklam vermek ve harcadığınız bütçenin kaç telefon araması ve WhatsApp mesajı getirdiğini ölçmek için **yalnızca Google Ads etiketi (`AW-XXXXXXXXX`) yeterlidir.**

| Yöntem | Zorunlu mu? | Kurulum Süresi | Kimler İçin Uygun? |
|---|---|---|---|
| **Yalnızca Google Ads (gtag.js)** | **Yeterli (Tavsiye)** | **5 Dakika** | Hızlıca reklam çıkıp telefon ve WhatsApp dönüşümlerini saymak isteyenler için en sade ve hızlı yoldur. |
| **Google Search Console** | **Ücretsiz Arama İçin Şart** | **3 Dakika** | Sitenizin Google aramalarında ve haritalarda çıkması, `sitemap.xml` dosyasını Google'a tanıtmak için gereklidir (Ücretsizdir). |
| **Google Analytics 4 (GA4)** | *İsteğe Bağlı* | 5 Dakika | Ziyaretçilerin sitede kaç dakika kaldığını, hangi şehirden girdiğini detaylı raporlamak ve ileride yeniden pazarlama (remarketing) yapmak için yararlıdır. |
| **Google Tag Manager (GTM)** | *İsteğe Bağlı* | 10 Dakika | Kod bilmeyen veya onlarca farklı pazarlama aracını (Facebook Pixel, TikTok Pixel vb.) tek panelden yönetmek isteyenler içindir. Tek sayfalık siteniz için şart değildir. |

---

## 🔍 BÖLÜM 1: Google Search Console Bağlama Rehberi (Organik Google İndeksi)

Google Search Console, sitenizin Google arama sonuçlarında çıkmasını, tıklanma sayılarını ve `sitemap.xml` haritanızı Google botlarına bildirmenizi sağlar.

### Adım 1: Search Console'a Giriş Yapın
1. [search.google.com/search-console](https://search.google.com/search-console) adresine gidin ve Google hesabınızla giriş yapın.
2. Sol üstteki mülk seçici menüsünden **"Mülk Ekle" (Add Property)** butonuna tıklayın.

### Adım 2: Mülk Türünü Seçin (URL Ön Eki - En Kolay Yöntem)
Sağ taraftaki **"URL Ön Eki" (URL Prefix)** kutucuğuna sitenizin tam adresini yazın:
```text
https://masajmalatya.com.tr/
```
ve **"Devam"** butonuna basın.

### Adım 3: HTML Etiketi ile Doğrulama
1. Karşınıza gelen doğrulama yöntemleri listesinden **"HTML Etiketi" (HTML Tag)** seçeneğini açın.
2. Google size şu şekilde tek satırlık bir kod verecektir:
   ```html
   <meta name="google-site-verification" content="SİZİN_ÖZEL_DOĞRULAMA_KODUNUZ" />
   ```
3. Bu satırı kopyalayın ve `index.html` dosyanızın `<head>` etiketinin içine yapıştırın.
4. Dosyayı sunucunuza yükledikten sonra Search Console ekranındaki **"Doğrula" (Verify)** butonuna basın. Doğrulama anında yeşil onay verecektir.

### Adım 4: Site Haritasını (Sitemap) Google'a Tanıtın
1. Doğrulama tamamlandıktan sonra sol menüden **"Site Haritaları" (Sitemaps)** sekmesine tıklayın.
2. "Yeni bir site haritası ekleyin" alanına şunu yazın:
   ```text
   sitemap.xml
   ```
3. **"Gönder" (Submit)** butonuna basın. Durum **"Başarılı"** olarak görünecek ve tüm sayfalarınız ile görselleriniz Google dizinine eklenecektir.

---

## 🎯 BÖLÜM 2: Yalnızca Google Ads ile Doğrudan Reklam & Dönüşüm Kurulumu

Bu yöntemle hiçbir aracıya (GTM veya GA4) ihtiyaç duymadan doğrudan reklam verebilir ve telefon/WhatsApp tıklamalarını Google Ads'e başarı olarak yazdırabilirsiniz.

### Adım 1: Google Ads Global Etiketini (gtag.js) Alın
1. [ads.google.com](https://ads.google.com) paneline giriş yapın.
2. Üst menüden **Araçlar ve Ayarlar > Kurulum > Google Etiketi (Google Tag)** bölümüne gidin.
3. Size verilen `AW-XXXXXXXXX` kimliğini kopyalayın.

### Adım 2: `index.html` Dosyasının `<head>` Bölümüne Ekleyin
`index.html` dosyanızın `<head>` etiketinin içine şu kodu yapıştırın:
```html
<!-- Google Ads Global Tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=AW-XXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'AW-XXXXXXXXX');
</script>
```
*(Not: `AW-XXXXXXXXX` yerine Google Ads hesabınızdaki gerçek ID'yi yazın).*

---

### Adım 3: Google Ads Panelinde Dönüşümleri Oluşturun

Malatya masaj reklamlarınızda bütçenizi boşa harcamamak için Google Ads algoritmasına **"Bana telefon edenleri ve WhatsApp'tan yazanları bul"** dememiz gerekir.

1. Google Ads panelinde **Hedefler > Dönüşümler > Özet** sayfasına gidin.
2. **"Yeni Dönüşüm İşlemi" (New Conversion Action)** butonuna tıklayın.
3. **Web Sitesi** seçeneğini seçin ve site adresinizi (`https://masajmalatya.com.tr/`) girin.
4. Sayfanın altından **"Dönüşüm işlemini kod kullanarak manuel ekle"** seçeneğini seçin:

#### 📞 1. Dönüşüm: Telefonla Arama
- **Kategori:** İletişim (Contact) veya Gelen Arama (Phone Call Lead)
- **Dönüşüm Adı:** `Telefon Araması - Luna Spa`
- **Değer:** Her dönüşüm için aynı değeri kullanın (Örn: `100 TL`) veya değer atamayın.
- **Sayım:** Bir (Her müşteri için 1 kez sayılsın).
- **Kaydet ve Devam Et** dedikten sonra size verilen `AW-XXXXXXXXX/TELEFON_KODU` stringini bir kenara not edin.

#### 💬 2. Dönüşüm: WhatsApp Mesajı
- **Kategori:** İletişim (Contact)
- **Dönüşüm Adı:** `WhatsApp Randevu - Luna Spa`
- **Kaydet ve Devam Et** dedikten sonra size verilen `AW-XXXXXXXXX/WHATSAPP_KODU` stringini not edin.

---

### Adım 4: `index.html` İçindeki `trackConversion` Fonksiyonunu Bağlayın

`index.html` dosyanızın en altındaki `<script>` alanında yer alan `trackConversion` fonksiyonunu şu şekilde güncelleyin:

```javascript
function trackConversion(action, label, value) {
    // 1. Google Ads Telefon Araması Dönüşümü
    if (action === 'call_click') {
        gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/TELEFON_DONUSUM_KODU',
            'event_callback': function() {
                console.log('Telefon araması dönüşümü Ads hesabına iletildi.');
            }
        });
    }

    // 2. Google Ads WhatsApp Randevu Dönüşümü
    if (action === 'whatsapp_click') {
        gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/WHATSAPP_DONUSUM_KODU',
            'event_callback': function() {
                console.log('WhatsApp mesajı dönüşümü Ads hesabına iletildi.');
            }
        });
    }
}
```

Bu işlem tamamlandığında sitedeki **14 farklı butonun tamamı** (üst bar, navbar, hero, paketler, iletişim kartı, kayan buton, mobil sabit alt bar) tıklandığı anda Google Ads'e otomatik dönüşüm yollar!

---

## 📈 BÖLÜM 3: Google Analytics 4 (GA4) Bağlama (İsteğe Bağlı)

Eğer ileride ziyaretçi istatistiklerini detaylı görmek isterseniz:
1. [analytics.google.com](https://analytics.google.com) adresinden bir GA4 mülkü açıp `G-XXXXXXXXXX` kodunuzu alın.
2. `<head>` içine eklediğiniz Google Tag koduna tek bir satır eklemeniz yeterlidir:
```javascript
gtag('config', 'AW-XXXXXXXXX');  // Google Ads
gtag('config', 'G-XXXXXXXXXX');  // Google Analytics 4
```
Ayrı bir kütüphane yüklemenize gerek kalmaz; aynı `gtag.js` her iki sistemi birden besler.

---

## 🏁 Özet ve Yayın Kontrol Listesi

1. [ ] **Google Search Console:** HTML doğrulama meta etiketini `<head>` içine yapıştırıp siteyi doğrulayın ve `sitemap.xml` gönderin.
2. [ ] **Google Ads Etiketi:** `AW-XXXXXXXXX` etiketini `<head>` içine yerleştirin.
3. [ ] **Dönüşüm Kodları:** Telefon ve WhatsApp dönüşüm kimliklerini `trackConversion()` içine yazın.
4. [ ] **Reklamı Başlatın:** Malatya odaklı arama ağı reklamlarınızı başlatın!

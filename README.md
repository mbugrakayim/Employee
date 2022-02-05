# Employee

## Projeye Genel Bakış

![1 1](https://user-images.githubusercontent.com/98321848/152648892-50a7b410-17cb-4558-a98a-ea857346d4d0.png)

### Employe Uygulamasının Kullanıcı Arayüzüdür.
Temel olarak çalışanların bir listesi bu sayfada listelenir.<br/>
Add Employe Butonu ile yeni bir personel ekleyebiliriz<br/>
Update Butonu personel bilgisini günceller<br/>
View Butonu personel bilgisini gösterir<br/>
Delete Butonu personeli listeden silmemisi sağlar

![2](https://user-images.githubusercontent.com/98321848/152649448-e44d97df-7601-4a3d-b564-220f381a84ad.png)
### Yeni bir personel ekleyebileceğimiz sayfadır.
Personel adı, soyadı ve e-posta adresi ekleyerek, save butonu tıklandığı vakit personel listesine yeni bir personel ekleyecektir.

![3](https://user-images.githubusercontent.com/98321848/152649750-eb0e9329-1a2e-4852-9ed0-4a6918679da0.png)
### Personel bilgilerini güncelleyeceğimiz sayfadır.
Güncellemek istediğimiz alanı değeiştirerek save butonuna tıklandığı vakit personel listesindeki alan güncellenecektir.

![4](https://user-images.githubusercontent.com/98321848/152650152-c8dd6e80-a462-4b9a-bef9-bc8f4f7cf18e.png)
### Personel bilgilerini görüntülediğimiz sayfa.

## Uygulama Mimarisi
![5](https://user-images.githubusercontent.com/98321848/152650677-82cae7d1-0451-4662-8f7f-e6a64842501b.png)

İstemci tarafında React uygulama mimarisine ve sunucu tarafında Spring Boot uygulama mimarisine sahibiz.<br/>
Spring Boot uygulama mimarisi;<br/>
Controller: Uygulamamızın REST api'leri belirlediği ve dışarıdan belirlenen apilere gelen verileri Service katmanına gönderdiği katmandır.<br/>
Service: Controller katmanında gelen verileri işleyip ve kontrollerin yapıldığı, uygunsa veritabanına kaydedildiği değilse geri cevap dönüldüğü katmandır.<br/>
Repository: Veritabanı ile iletişime geçtiğimiz katman.<br/>

React Mimarisi;<br/>
Router: Tüm bileşen yapılarını inject eden, URL'e göre ilgili sayfayı ve içerisindeki bileşenleri renderlenmesini sağlayan kısım<br/>
Containers: Bileşenleri sadece UI göstermek ve kullanıcı etkileşimlerini alarak business mantıklarını gerçekleştirmesini sağlayarak dış bağımlılıklardan soyutlamayı sağlayan katman.<br/>
Service: Tüm Rest Api çağrılarını tuttuğumuz katman.





import React from 'react'
import "./css/About.css"

function About() {
    return (
        <div className="about container">
            <div className="row mx-4">
                <div className="col-md-4 my-4">
                    <div className="border">
                        <h5 className="my-3">Hakkımızda</h5>
                        <ul>
                             <li>Vakfın Tarihçesi</li>
                            <li>Organizasyon Yapısı</li>
                            <li>Sosyal Tesisler</li>
                        </ul>
                    </div>
                </div>
                <div className=" col-md-8 border rounded my-4 p-4 date">
                     <h5>Vakfın Tarihçesi</h5>
                    <p>
                        1960 yılları öncesinde, İş Kanunu ve Sosyal Güvenlik Kanunları kapsamı dışında olan Bankalar, kendi personelinin sosyal güvenliklerini sağlamak üzere “Özel Emekli Sandıkları” kurmuşlardır. Bankamızda, 1954 yılında,  kendi “Özel Emekli Sandığı’nı kurmuştur. <br></br><br></br>
                        Özel emekli sandıkları, bankacılık iş kolunun 1960 yılında İş kanunun kapsamına alınmasından sonra bir noktada hukukileştirilerek, sandıklar arasındaki hizmet geçişi ile hizmet birleştirmesi sağlanmıştır. 01 Mart 1965 tarihinde yürürlüğe giren 506 sayılı Sosyal Sigortalar Kanunun Geçici 20.maddesi ile bankalar, sigorta ve reasürans şirketleri, ticaret odaları, sanayi odaları, borsalar ve bunların teşkil ettiği birlik personeli de malullük, yaşlılık ve ölümlerinde yardım yapmak üzere kurulan bu tür sandıklara (Sandık Vakıfları) dahil edilmişlerdir.<br></br><br></br>
                        Türkiye Garanti Bankası Emekli ve Yardım Sandığı Vakfı’nın kuruluş amacı; Vakfa prim  kesilen çalışanlarla emekli üyelere  meslek hastalıkları (çalışan üyeler için iş kazası dahil), analık ve hastalık konusunda; çalışan ve emekli üyelerin bakmakla yükümlü olduğu aile bireylerine ise analık ve hastalık konusunda sağlık hizmeti vermek olup, ayrıca  çalışan üyelere emekliliği hak etmesi halinde emekli maaşı bağlanmasıdır.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About

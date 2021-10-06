import React from 'react';
import Card from '../card/Card';

export default function HomeList() {
        const date = new Date();
        let session = ''
        if (date.getHours() < 12){
            session = "Một ngày tràn năng lượng"
        } else if ( 18 > date.getHours() > 12) {
            session = "Chào buổi chiều"
        } else if ( date.getHours() < 4) {
            session = "Hôm nay của bạn thế nào"
        }else {
            session = "Thư giãn cuối ngày"
        }

    return (
        <div>
                <div className="cardsWrap">
                    <h1 >{session}</h1>
                    <div className="cardWrapInner">
                    </div>    
                </div>
                <div className="cardsWrap">
                    <h2>Dành cho bạn</h2>
                    <p className="description">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
                    <div className="cardWrapInner">
                        
                        <Card/>
                        <Card/>
                    </div>    
                </div>
                <div className="cardsWrap">
                    <h2>Dành cho bạn</h2>
                    <p className="description">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
                    <div className="cardWrapInner">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>    
                </div>
                <div className="cardsWrap">
                    <h2>Dành cho bạn</h2>
                    <p className="description">Thêm nhiều gợi ý hay hơn khi bạn nghe nhiều hơn.</p>
                    <div className="cardWrapInner">
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </div>    
                </div>
        </div>
    )
}

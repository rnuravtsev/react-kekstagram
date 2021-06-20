import React from 'react';

const SuccessUpload = () => {
    return (
        <div id="success">
            <section className="success">
                <div className="success__inner">
                    <h2 className="success__title">Изображение успешно загружено</h2>
                    <button type="button" className="success__button">Круто!</button>
                </div>
            </section>
        </div>
    );
};

export default SuccessUpload;

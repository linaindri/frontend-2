import React from "react";
import './style.css';

function LandingPage() {
    return (
        <>
            <header className="Header fixed top-0 ledt-0 right-0 text-3xl">
                Ini Header
            </header>
            <main className="center">
                <div className="Laundry-container">
                    <h1>LaundryIND</h1>
                    <div className="Laundry-row">
                        <div className="Laundry-item">
                            <p>Nama : Elsanabila</p>
                            <p>Layanan : Cuci+Setrika</p>
                            <p>Jumlah/kg : 5 kg</p>
                            <p>Harga : 5000</p>
                            <p>Jumlah : 25000 </p>
                        </div>
                        <div className="Laundry-item">
                            <p>Nama : nawang juwita</p>
                            <p>Layanan : Cuci Kering</p>
                            <p>Jumlah/kg : 2</p>
                            <p>Harga : 5000 </p>
                            <p>Jumlah : 10000</p>
                        </div>
                        <div className="Laundry-item">
                            <p>Nama : rani patricia</p>
                            <p>Layanan : Setrika</p>
                            <p>Jumlah/kg : 2</p>
                            <p>Harga : 4000</p>
                            <p>Jumlah : 8000</p>
                        </div>
                    </div>
                </div>
            </main>
            <footer className="Footer fixed bottom-0 left-0 right-0 text-3xl">
                @copyright nzwind
            </footer>
        </>
    )
}

export default LandingPage;
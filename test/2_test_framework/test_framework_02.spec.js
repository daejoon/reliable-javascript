describe('createReservation(passenger, flight)', function () {
    it('주어진 passenger를 passengerInformation 프로퍼티에 할당한다', function () {
        const testPassenger = {
            firtName: '윤지',
            lastName: '김'
        };

        const testFlight = {
            number: '3443',
            carrier: '대한항공',
            destination: '울산',
        };

        const reservation = createReservation(testPassenger, testFlight);
        expect(reservation.passengerInformation).toBe(testPassenger);
    });

    it('주어진 flight를 flightInformation 프로퍼티에 할당한다', function () {
        const testPassenger = {
            firtName: '윤지',
            lastName: '김'
        };

        const testFlight = {
            number: '3443',
            carrier: '대한항공',
            destination: '울산',
        };

        const reservation = createReservation(testPassenger, testFlight);
        expect(reservation.flightInformation).toBe(testFlight);
    });

    it('예약 정보를 웹 서비스 종단점으로 전송한다', function () {

    });
});

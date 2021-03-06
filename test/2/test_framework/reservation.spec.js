describe('createReservation', function () {
    let testFlight = null;
    let testPassenger = null;
    let testReservation = null;
    let testSaver = null;

    beforeEach(function () {
        testPassenger = {
            firstName: '윤지',
            lastName: '김'
        };

        testFlight = {
            number: '3443',
            carrier: '대한항공',
            destination: '울산',
        };

        testSaver = new ReservationSaver();
        spyOn(testSaver, 'saveReservation');

        testReservation = createReservation(testPassenger, testFlight, testSaver);
    });

    it('passenger를 passengerInformation 프로퍼티에 할당한다', function () {
        expect(testReservation.passengerInformation).toBe(testPassenger);
    });

    it('flight를 flightInformation 프로퍼티에 할당한다', function () {
        expect(testReservation.flightInformation).toBe(testFlight);
    });

    it('예약 정보를 저장한다.', function () {
        expect(testSaver.saveReservation).toHaveBeenCalled();
    });
});

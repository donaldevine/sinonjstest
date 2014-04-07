describe("My callout", function () {

    var server;
    
    var fakeData = [{ id: 12, comment: "Hey there" }];
    
   
    it("Should hit remote endpoint", function () {

        sinon.spy($, "ajax");

        var callback = function () { };

        BackEndServiceCaller.doCallout("http://echo.jsontest.com/key/value/one/two", callback);
        var call = $.ajax.getCall(0);
        expect(call).not.toBeNull();
        $.ajax.restore();

    })


    it("Should fetch data", function () {

        server = sinon.fakeServer.create();
        server.respondWith(
            [200, { "Content-Type": "application/json" }, JSON.stringify(fakeData)]
        );

        var callback = sinon.spy();

        BackEndServiceCaller.doCallout("http://echo.jsontest.com/key/value/one/two", callback);
        
        sinon.assert.calledWith(callback, [{ id: 12, comment: "Hey there" }]);

        server.restore();

    })


        

})
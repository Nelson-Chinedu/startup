class EventEmitter {
	constructor() {
    	this.events = {}; 
	}

	on(eventName, callback){
		if( !this.events[eventName] ) {
	    	this.events[eventName] = [];
	  	}
	    
	  	this.events[eventName].push(callback);

	  	return () => { // closure
    		this.events[eventName] = this.events[eventName].filter(eventFn => callback !== eventFn);
  
  }
	}

	emit(eventName, data) {
		const event = this.events[eventName];
 		if (event) { 
    		event.forEach(fn => {
       			fn.call(null, data);
     		});
   		}
	}

	off(eventName, callback) {
		let unsubscribe = emitter.on(eventName, callback => console.log(callback)); // capturo el closure

		unsubscribe(); // ejecuto el closure
	}

}

export default EventEmitter;
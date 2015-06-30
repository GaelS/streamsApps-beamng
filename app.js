function Sockets(){}

Sockets.prototype.initialize = function(){
   
	this.socket = new WebSocket("ws://127.0.0.1:4444")
   
};

Sockets.prototype.update = function(streams){
	this.data = { "x" : streams.sensors.position.x , 
				  	"y" : streams.sensors.position.y , 
						"z" : streams.sensors.position.z,
							"heading" : streams.sensors.yaw,
								"direction" : streams.sensors.direction, 
				  					"roll" : streams.sensors.roll , 
										"pitch" : streams.sensors.pitch,
											"wheelFR" : streams.wheelInfo[0][10],
													"wheeFL" : streams.wheelInfo[1][10],
														"wheeRR" : streams.wheelInfo[2][10],
															"wheeRL" : streams.wheelInfo[3][10],
																"currentSteer" : streams.electrics.steering,
																	"dx" : streams.sensors.direction.x,
																		"dy" : streams.sensors.direction.y,
																			"dz" : streams.sensors.direction.z,
																				"airspeed" : streams.electrics.airspeed };
this.socket.send(JSON.stringify(this.data));
};

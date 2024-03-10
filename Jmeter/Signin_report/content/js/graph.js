/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 52.0, "minX": 0.0, "maxY": 1297.0, "series": [{"data": [[0.0, 52.0], [0.1, 52.0], [0.2, 55.0], [0.3, 55.0], [0.4, 56.0], [0.5, 56.0], [0.6, 56.0], [0.7, 56.0], [0.8, 56.0], [0.9, 57.0], [1.0, 57.0], [1.1, 57.0], [1.2, 57.0], [1.3, 58.0], [1.4, 58.0], [1.5, 58.0], [1.6, 58.0], [1.7, 58.0], [1.8, 60.0], [1.9, 60.0], [2.0, 60.0], [2.1, 60.0], [2.2, 60.0], [2.3, 60.0], [2.4, 62.0], [2.5, 66.0], [2.6, 66.0], [2.7, 66.0], [2.8, 66.0], [2.9, 67.0], [3.0, 67.0], [3.1, 67.0], [3.2, 68.0], [3.3, 68.0], [3.4, 71.0], [3.5, 71.0], [3.6, 71.0], [3.7, 71.0], [3.8, 71.0], [3.9, 72.0], [4.0, 72.0], [4.1, 72.0], [4.2, 72.0], [4.3, 72.0], [4.4, 72.0], [4.5, 73.0], [4.6, 73.0], [4.7, 74.0], [4.8, 76.0], [4.9, 76.0], [5.0, 76.0], [5.1, 76.0], [5.2, 77.0], [5.3, 77.0], [5.4, 79.0], [5.5, 79.0], [5.6, 79.0], [5.7, 80.0], [5.8, 80.0], [5.9, 80.0], [6.0, 80.0], [6.1, 84.0], [6.2, 85.0], [6.3, 85.0], [6.4, 88.0], [6.5, 88.0], [6.6, 92.0], [6.7, 92.0], [6.8, 103.0], [6.9, 103.0], [7.0, 104.0], [7.1, 104.0], [7.2, 104.0], [7.3, 107.0], [7.4, 107.0], [7.5, 107.0], [7.6, 107.0], [7.7, 107.0], [7.8, 109.0], [7.9, 109.0], [8.0, 109.0], [8.1, 109.0], [8.2, 110.0], [8.3, 110.0], [8.4, 110.0], [8.5, 112.0], [8.6, 112.0], [8.7, 114.0], [8.8, 114.0], [8.9, 115.0], [9.0, 115.0], [9.1, 116.0], [9.2, 116.0], [9.3, 117.0], [9.4, 120.0], [9.5, 120.0], [9.6, 121.0], [9.7, 121.0], [9.8, 122.0], [9.9, 122.0], [10.0, 122.0], [10.1, 123.0], [10.2, 123.0], [10.3, 124.0], [10.4, 124.0], [10.5, 125.0], [10.6, 125.0], [10.7, 128.0], [10.8, 128.0], [10.9, 128.0], [11.0, 129.0], [11.1, 129.0], [11.2, 130.0], [11.3, 130.0], [11.4, 132.0], [11.5, 132.0], [11.6, 134.0], [11.7, 137.0], [11.8, 137.0], [11.9, 138.0], [12.0, 138.0], [12.1, 148.0], [12.2, 148.0], [12.3, 167.0], [12.4, 172.0], [12.5, 172.0], [12.6, 174.0], [12.7, 174.0], [12.8, 175.0], [12.9, 175.0], [13.0, 177.0], [13.1, 177.0], [13.2, 177.0], [13.3, 180.0], [13.4, 180.0], [13.5, 181.0], [13.6, 181.0], [13.7, 183.0], [13.8, 183.0], [13.9, 185.0], [14.0, 187.0], [14.1, 187.0], [14.2, 189.0], [14.3, 189.0], [14.4, 193.0], [14.5, 193.0], [14.6, 194.0], [14.7, 194.0], [14.8, 194.0], [14.9, 194.0], [15.0, 194.0], [15.1, 195.0], [15.2, 195.0], [15.3, 195.0], [15.4, 195.0], [15.5, 195.0], [15.6, 197.0], [15.7, 197.0], [15.8, 197.0], [15.9, 197.0], [16.0, 197.0], [16.1, 197.0], [16.2, 198.0], [16.3, 198.0], [16.4, 198.0], [16.5, 199.0], [16.6, 199.0], [16.7, 199.0], [16.8, 199.0], [16.9, 199.0], [17.0, 199.0], [17.1, 199.0], [17.2, 200.0], [17.3, 200.0], [17.4, 201.0], [17.5, 201.0], [17.6, 201.0], [17.7, 201.0], [17.8, 201.0], [17.9, 202.0], [18.0, 202.0], [18.1, 202.0], [18.2, 202.0], [18.3, 202.0], [18.4, 202.0], [18.5, 203.0], [18.6, 203.0], [18.7, 203.0], [18.8, 203.0], [18.9, 203.0], [19.0, 204.0], [19.1, 204.0], [19.2, 204.0], [19.3, 205.0], [19.4, 205.0], [19.5, 205.0], [19.6, 205.0], [19.7, 206.0], [19.8, 206.0], [19.9, 206.0], [20.0, 206.0], [20.1, 206.0], [20.2, 206.0], [20.3, 206.0], [20.4, 206.0], [20.5, 206.0], [20.6, 206.0], [20.7, 206.0], [20.8, 206.0], [20.9, 206.0], [21.0, 206.0], [21.1, 207.0], [21.2, 207.0], [21.3, 207.0], [21.4, 207.0], [21.5, 208.0], [21.6, 208.0], [21.7, 208.0], [21.8, 208.0], [21.9, 208.0], [22.0, 209.0], [22.1, 209.0], [22.2, 210.0], [22.3, 210.0], [22.4, 210.0], [22.5, 210.0], [22.6, 210.0], [22.7, 211.0], [22.8, 211.0], [22.9, 211.0], [23.0, 211.0], [23.1, 211.0], [23.2, 212.0], [23.3, 212.0], [23.4, 212.0], [23.5, 212.0], [23.6, 212.0], [23.7, 212.0], [23.8, 213.0], [23.9, 213.0], [24.0, 213.0], [24.1, 213.0], [24.2, 213.0], [24.3, 214.0], [24.4, 214.0], [24.5, 214.0], [24.6, 214.0], [24.7, 215.0], [24.8, 216.0], [24.9, 216.0], [25.0, 216.0], [25.1, 216.0], [25.2, 216.0], [25.3, 216.0], [25.4, 217.0], [25.5, 217.0], [25.6, 217.0], [25.7, 218.0], [25.8, 218.0], [25.9, 218.0], [26.0, 218.0], [26.1, 218.0], [26.2, 218.0], [26.3, 218.0], [26.4, 218.0], [26.5, 218.0], [26.6, 220.0], [26.7, 220.0], [26.8, 220.0], [26.9, 220.0], [27.0, 220.0], [27.1, 220.0], [27.2, 220.0], [27.3, 222.0], [27.4, 222.0], [27.5, 222.0], [27.6, 222.0], [27.7, 222.0], [27.8, 223.0], [27.9, 223.0], [28.0, 224.0], [28.1, 224.0], [28.2, 225.0], [28.3, 225.0], [28.4, 227.0], [28.5, 228.0], [28.6, 228.0], [28.7, 228.0], [28.8, 228.0], [28.9, 228.0], [29.0, 228.0], [29.1, 229.0], [29.2, 229.0], [29.3, 229.0], [29.4, 231.0], [29.5, 231.0], [29.6, 232.0], [29.7, 232.0], [29.8, 233.0], [29.9, 233.0], [30.0, 235.0], [30.1, 236.0], [30.2, 236.0], [30.3, 236.0], [30.4, 236.0], [30.5, 239.0], [30.6, 239.0], [30.7, 240.0], [30.8, 243.0], [30.9, 243.0], [31.0, 248.0], [31.1, 248.0], [31.2, 249.0], [31.3, 249.0], [31.4, 249.0], [31.5, 249.0], [31.6, 250.0], [31.7, 252.0], [31.8, 252.0], [31.9, 253.0], [32.0, 253.0], [32.1, 253.0], [32.2, 253.0], [32.3, 255.0], [32.4, 259.0], [32.5, 259.0], [32.6, 259.0], [32.7, 259.0], [32.8, 261.0], [32.9, 261.0], [33.0, 263.0], [33.1, 263.0], [33.2, 263.0], [33.3, 264.0], [33.4, 264.0], [33.5, 265.0], [33.6, 265.0], [33.7, 266.0], [33.8, 266.0], [33.9, 268.0], [34.0, 270.0], [34.1, 270.0], [34.2, 271.0], [34.3, 271.0], [34.4, 272.0], [34.5, 272.0], [34.6, 272.0], [34.7, 273.0], [34.8, 273.0], [34.9, 273.0], [35.0, 273.0], [35.1, 274.0], [35.2, 274.0], [35.3, 274.0], [35.4, 274.0], [35.5, 274.0], [35.6, 274.0], [35.7, 274.0], [35.8, 275.0], [35.9, 275.0], [36.0, 275.0], [36.1, 275.0], [36.2, 275.0], [36.3, 275.0], [36.4, 275.0], [36.5, 277.0], [36.6, 277.0], [36.7, 278.0], [36.8, 278.0], [36.9, 278.0], [37.0, 278.0], [37.1, 278.0], [37.2, 279.0], [37.3, 279.0], [37.4, 279.0], [37.5, 279.0], [37.6, 279.0], [37.7, 280.0], [37.8, 280.0], [37.9, 281.0], [38.0, 281.0], [38.1, 281.0], [38.2, 281.0], [38.3, 281.0], [38.4, 281.0], [38.5, 281.0], [38.6, 281.0], [38.7, 281.0], [38.8, 282.0], [38.9, 282.0], [39.0, 282.0], [39.1, 282.0], [39.2, 284.0], [39.3, 284.0], [39.4, 284.0], [39.5, 284.0], [39.6, 284.0], [39.7, 284.0], [39.8, 284.0], [39.9, 284.0], [40.0, 284.0], [40.1, 284.0], [40.2, 284.0], [40.3, 284.0], [40.4, 284.0], [40.5, 284.0], [40.6, 285.0], [40.7, 285.0], [40.8, 285.0], [40.9, 285.0], [41.0, 285.0], [41.1, 285.0], [41.2, 285.0], [41.3, 285.0], [41.4, 285.0], [41.5, 285.0], [41.6, 285.0], [41.7, 285.0], [41.8, 286.0], [41.9, 286.0], [42.0, 286.0], [42.1, 286.0], [42.2, 286.0], [42.3, 286.0], [42.4, 287.0], [42.5, 287.0], [42.6, 287.0], [42.7, 287.0], [42.8, 287.0], [42.9, 287.0], [43.0, 287.0], [43.1, 288.0], [43.2, 288.0], [43.3, 288.0], [43.4, 288.0], [43.5, 288.0], [43.6, 288.0], [43.7, 288.0], [43.8, 289.0], [43.9, 289.0], [44.0, 289.0], [44.1, 289.0], [44.2, 289.0], [44.3, 289.0], [44.4, 289.0], [44.5, 289.0], [44.6, 289.0], [44.7, 289.0], [44.8, 290.0], [44.9, 290.0], [45.0, 290.0], [45.1, 290.0], [45.2, 291.0], [45.3, 291.0], [45.4, 291.0], [45.5, 291.0], [45.6, 291.0], [45.7, 291.0], [45.8, 291.0], [45.9, 291.0], [46.0, 291.0], [46.1, 292.0], [46.2, 292.0], [46.3, 292.0], [46.4, 292.0], [46.5, 292.0], [46.6, 292.0], [46.7, 292.0], [46.8, 292.0], [46.9, 292.0], [47.0, 292.0], [47.1, 292.0], [47.2, 292.0], [47.3, 293.0], [47.4, 293.0], [47.5, 293.0], [47.6, 293.0], [47.7, 293.0], [47.8, 294.0], [47.9, 294.0], [48.0, 294.0], [48.1, 294.0], [48.2, 295.0], [48.3, 295.0], [48.4, 296.0], [48.5, 296.0], [48.6, 296.0], [48.7, 296.0], [48.8, 296.0], [48.9, 297.0], [49.0, 297.0], [49.1, 297.0], [49.2, 297.0], [49.3, 298.0], [49.4, 298.0], [49.5, 298.0], [49.6, 298.0], [49.7, 298.0], [49.8, 298.0], [49.9, 298.0], [50.0, 298.0], [50.1, 298.0], [50.2, 298.0], [50.3, 299.0], [50.4, 299.0], [50.5, 300.0], [50.6, 300.0], [50.7, 300.0], [50.8, 301.0], [50.9, 301.0], [51.0, 301.0], [51.1, 301.0], [51.2, 301.0], [51.3, 301.0], [51.4, 301.0], [51.5, 301.0], [51.6, 301.0], [51.7, 302.0], [51.8, 302.0], [51.9, 302.0], [52.0, 302.0], [52.1, 302.0], [52.2, 302.0], [52.3, 302.0], [52.4, 303.0], [52.5, 303.0], [52.6, 303.0], [52.7, 303.0], [52.8, 303.0], [52.9, 303.0], [53.0, 303.0], [53.1, 303.0], [53.2, 303.0], [53.3, 304.0], [53.4, 304.0], [53.5, 305.0], [53.6, 305.0], [53.7, 305.0], [53.8, 305.0], [53.9, 306.0], [54.0, 306.0], [54.1, 306.0], [54.2, 306.0], [54.3, 306.0], [54.4, 307.0], [54.5, 307.0], [54.6, 307.0], [54.7, 307.0], [54.8, 307.0], [54.9, 308.0], [55.0, 308.0], [55.1, 308.0], [55.2, 308.0], [55.3, 308.0], [55.4, 308.0], [55.5, 308.0], [55.6, 309.0], [55.7, 309.0], [55.8, 309.0], [55.9, 309.0], [56.0, 309.0], [56.1, 309.0], [56.2, 309.0], [56.3, 309.0], [56.4, 309.0], [56.5, 309.0], [56.6, 309.0], [56.7, 310.0], [56.8, 310.0], [56.9, 310.0], [57.0, 310.0], [57.1, 310.0], [57.2, 312.0], [57.3, 312.0], [57.4, 312.0], [57.5, 312.0], [57.6, 312.0], [57.7, 313.0], [57.8, 313.0], [57.9, 316.0], [58.0, 316.0], [58.1, 317.0], [58.2, 317.0], [58.3, 317.0], [58.4, 317.0], [58.5, 318.0], [58.6, 318.0], [58.7, 318.0], [58.8, 319.0], [58.9, 319.0], [59.0, 319.0], [59.1, 319.0], [59.2, 319.0], [59.3, 320.0], [59.4, 320.0], [59.5, 320.0], [59.6, 320.0], [59.7, 320.0], [59.8, 320.0], [59.9, 320.0], [60.0, 323.0], [60.1, 323.0], [60.2, 323.0], [60.3, 323.0], [60.4, 324.0], [60.5, 324.0], [60.6, 324.0], [60.7, 324.0], [60.8, 325.0], [60.9, 325.0], [61.0, 325.0], [61.1, 325.0], [61.2, 325.0], [61.3, 326.0], [61.4, 326.0], [61.5, 327.0], [61.6, 327.0], [61.7, 327.0], [61.8, 327.0], [61.9, 327.0], [62.0, 328.0], [62.1, 328.0], [62.2, 329.0], [62.3, 329.0], [62.4, 331.0], [62.5, 333.0], [62.6, 333.0], [62.7, 333.0], [62.8, 333.0], [62.9, 334.0], [63.0, 334.0], [63.1, 335.0], [63.2, 335.0], [63.3, 335.0], [63.4, 336.0], [63.5, 336.0], [63.6, 337.0], [63.7, 337.0], [63.8, 338.0], [63.9, 343.0], [64.0, 343.0], [64.1, 346.0], [64.2, 346.0], [64.3, 347.0], [64.4, 347.0], [64.5, 354.0], [64.6, 354.0], [64.7, 354.0], [64.8, 354.0], [64.9, 354.0], [65.0, 354.0], [65.1, 354.0], [65.2, 356.0], [65.3, 356.0], [65.4, 358.0], [65.5, 358.0], [65.6, 358.0], [65.7, 360.0], [65.8, 360.0], [65.9, 361.0], [66.0, 361.0], [66.1, 361.0], [66.2, 363.0], [66.3, 363.0], [66.4, 364.0], [66.5, 364.0], [66.6, 365.0], [66.7, 365.0], [66.8, 366.0], [66.9, 366.0], [67.0, 366.0], [67.1, 366.0], [67.2, 366.0], [67.3, 367.0], [67.4, 367.0], [67.5, 367.0], [67.6, 367.0], [67.7, 369.0], [67.8, 370.0], [67.9, 370.0], [68.0, 370.0], [68.1, 370.0], [68.2, 370.0], [68.3, 370.0], [68.4, 370.0], [68.5, 371.0], [68.6, 371.0], [68.7, 372.0], [68.8, 372.0], [68.9, 373.0], [69.0, 373.0], [69.1, 373.0], [69.2, 373.0], [69.3, 373.0], [69.4, 373.0], [69.5, 373.0], [69.6, 378.0], [69.7, 378.0], [69.8, 378.0], [69.9, 378.0], [70.0, 380.0], [70.1, 380.0], [70.2, 380.0], [70.3, 380.0], [70.4, 380.0], [70.5, 382.0], [70.6, 382.0], [70.7, 383.0], [70.8, 383.0], [70.9, 383.0], [71.0, 383.0], [71.1, 383.0], [71.2, 385.0], [71.3, 385.0], [71.4, 386.0], [71.5, 386.0], [71.6, 386.0], [71.7, 386.0], [71.8, 386.0], [71.9, 387.0], [72.0, 387.0], [72.1, 387.0], [72.2, 387.0], [72.3, 388.0], [72.4, 388.0], [72.5, 388.0], [72.6, 389.0], [72.7, 389.0], [72.8, 389.0], [72.9, 389.0], [73.0, 389.0], [73.1, 391.0], [73.2, 391.0], [73.3, 392.0], [73.4, 392.0], [73.5, 392.0], [73.6, 392.0], [73.7, 392.0], [73.8, 392.0], [73.9, 392.0], [74.0, 392.0], [74.1, 392.0], [74.2, 394.0], [74.3, 394.0], [74.4, 394.0], [74.5, 394.0], [74.6, 394.0], [74.7, 394.0], [74.8, 394.0], [74.9, 394.0], [75.0, 394.0], [75.1, 394.0], [75.2, 394.0], [75.3, 395.0], [75.4, 395.0], [75.5, 395.0], [75.6, 395.0], [75.7, 395.0], [75.8, 396.0], [75.9, 396.0], [76.0, 396.0], [76.1, 396.0], [76.2, 397.0], [76.3, 397.0], [76.4, 397.0], [76.5, 397.0], [76.6, 397.0], [76.7, 398.0], [76.8, 398.0], [76.9, 400.0], [77.0, 400.0], [77.1, 400.0], [77.2, 400.0], [77.3, 400.0], [77.4, 401.0], [77.5, 401.0], [77.6, 401.0], [77.7, 401.0], [77.8, 401.0], [77.9, 401.0], [78.0, 401.0], [78.1, 401.0], [78.2, 401.0], [78.3, 402.0], [78.4, 402.0], [78.5, 402.0], [78.6, 403.0], [78.7, 403.0], [78.8, 405.0], [78.9, 405.0], [79.0, 405.0], [79.1, 405.0], [79.2, 405.0], [79.3, 406.0], [79.4, 406.0], [79.5, 406.0], [79.6, 406.0], [79.7, 407.0], [79.8, 407.0], [79.9, 407.0], [80.0, 407.0], [80.1, 407.0], [80.2, 407.0], [80.3, 407.0], [80.4, 408.0], [80.5, 408.0], [80.6, 408.0], [80.7, 408.0], [80.8, 408.0], [80.9, 409.0], [81.0, 409.0], [81.1, 410.0], [81.2, 410.0], [81.3, 411.0], [81.4, 411.0], [81.5, 412.0], [81.6, 412.0], [81.7, 412.0], [81.8, 412.0], [81.9, 412.0], [82.0, 412.0], [82.1, 412.0], [82.2, 412.0], [82.3, 412.0], [82.4, 412.0], [82.5, 412.0], [82.6, 412.0], [82.7, 413.0], [82.8, 413.0], [82.9, 414.0], [83.0, 414.0], [83.1, 414.0], [83.2, 416.0], [83.3, 416.0], [83.4, 416.0], [83.5, 416.0], [83.6, 416.0], [83.7, 416.0], [83.8, 418.0], [83.9, 418.0], [84.0, 418.0], [84.1, 419.0], [84.2, 419.0], [84.3, 419.0], [84.4, 419.0], [84.5, 420.0], [84.6, 420.0], [84.7, 420.0], [84.8, 425.0], [84.9, 425.0], [85.0, 425.0], [85.1, 425.0], [85.2, 428.0], [85.3, 428.0], [85.4, 428.0], [85.5, 428.0], [85.6, 428.0], [85.7, 428.0], [85.8, 428.0], [85.9, 430.0], [86.0, 430.0], [86.1, 431.0], [86.2, 431.0], [86.3, 431.0], [86.4, 432.0], [86.5, 432.0], [86.6, 441.0], [86.7, 441.0], [86.8, 444.0], [86.9, 444.0], [87.0, 450.0], [87.1, 453.0], [87.2, 453.0], [87.3, 455.0], [87.4, 455.0], [87.5, 455.0], [87.6, 455.0], [87.7, 459.0], [87.8, 466.0], [87.9, 466.0], [88.0, 466.0], [88.1, 466.0], [88.2, 469.0], [88.3, 469.0], [88.4, 472.0], [88.5, 475.0], [88.6, 475.0], [88.7, 478.0], [88.8, 478.0], [88.9, 478.0], [89.0, 478.0], [89.1, 479.0], [89.2, 479.0], [89.3, 479.0], [89.4, 483.0], [89.5, 483.0], [89.6, 483.0], [89.7, 483.0], [89.8, 485.0], [89.9, 485.0], [90.0, 486.0], [90.1, 488.0], [90.2, 488.0], [90.3, 490.0], [90.4, 490.0], [90.5, 490.0], [90.6, 490.0], [90.7, 493.0], [90.8, 496.0], [90.9, 496.0], [91.0, 499.0], [91.1, 499.0], [91.2, 499.0], [91.3, 499.0], [91.4, 499.0], [91.5, 499.0], [91.6, 501.0], [91.7, 501.0], [91.8, 501.0], [91.9, 502.0], [92.0, 502.0], [92.1, 502.0], [92.2, 502.0], [92.3, 503.0], [92.4, 504.0], [92.5, 504.0], [92.6, 505.0], [92.7, 505.0], [92.8, 505.0], [92.9, 505.0], [93.0, 507.0], [93.1, 512.0], [93.2, 512.0], [93.3, 512.0], [93.4, 512.0], [93.5, 512.0], [93.6, 512.0], [93.7, 512.0], [93.8, 512.0], [93.9, 512.0], [94.0, 512.0], [94.1, 512.0], [94.2, 517.0], [94.3, 517.0], [94.4, 521.0], [94.5, 521.0], [94.6, 534.0], [94.7, 541.0], [94.8, 541.0], [94.9, 557.0], [95.0, 557.0], [95.1, 570.0], [95.2, 570.0], [95.3, 583.0], [95.4, 584.0], [95.5, 584.0], [95.6, 588.0], [95.7, 588.0], [95.8, 590.0], [95.9, 590.0], [96.0, 599.0], [96.1, 599.0], [96.2, 601.0], [96.3, 601.0], [96.4, 601.0], [96.5, 604.0], [96.6, 604.0], [96.7, 607.0], [96.8, 607.0], [96.9, 613.0], [97.0, 678.0], [97.1, 678.0], [97.2, 690.0], [97.3, 690.0], [97.4, 692.0], [97.5, 692.0], [97.6, 700.0], [97.7, 700.0], [97.8, 700.0], [97.9, 707.0], [98.0, 707.0], [98.1, 709.0], [98.2, 709.0], [98.3, 710.0], [98.4, 710.0], [98.5, 721.0], [98.6, 735.0], [98.7, 735.0], [98.8, 738.0], [98.9, 738.0], [99.0, 767.0], [99.1, 767.0], [99.2, 885.0], [99.3, 1278.0], [99.4, 1278.0], [99.5, 1289.0], [99.6, 1289.0], [99.7, 1294.0], [99.8, 1294.0], [99.9, 1297.0]], "isOverall": false, "label": "Signin", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 188.0, "series": [{"data": [[0.0, 38.0], [300.0, 149.0], [600.0, 8.0], [1200.0, 4.0], [700.0, 9.0], [100.0, 59.0], [200.0, 188.0], [400.0, 83.0], [800.0, 1.0], [500.0, 26.0]], "isOverall": false, "label": "Signin", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1200.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 48.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 517.0, "series": [{"data": [[0.0, 517.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 48.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 1.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 8.847533632287, "minX": 1.70989944E12, "maxY": 9.638655462184877, "series": [{"data": [[1.7098995E12, 9.638655462184877], [1.70989944E12, 8.847533632287]], "isOverall": false, "label": "Load Test", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7098995E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 96.25, "minX": 1.0, "maxY": 419.8666666666666, "series": [{"data": [[1.0, 115.2], [2.0, 97.72727272727272], [4.0, 96.25], [8.0, 403.25], [9.0, 419.8666666666666], [5.0, 159.9230769230769], [10.0, 346.36465324384795], [3.0, 169.20000000000002], [6.0, 153.40909090909093], [7.0, 200.83333333333331]], "isOverall": false, "label": "Signin", "isController": false}, {"data": [[9.014159292035405, 315.52920353982324]], "isOverall": false, "label": "Signin-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 10.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 497.81666666666666, "minX": 1.70989944E12, "maxY": 3976.8333333333335, "series": [{"data": [[1.7098995E12, 1061.0833333333333], [1.70989944E12, 3976.8333333333335]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.7098995E12, 497.81666666666666], [1.70989944E12, 1865.7666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7098995E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 308.20852017937216, "minX": 1.70989944E12, "maxY": 342.9663865546217, "series": [{"data": [[1.7098995E12, 342.9663865546217], [1.70989944E12, 308.20852017937216]], "isOverall": false, "label": "Signin", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7098995E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 308.1479820627796, "minX": 1.70989944E12, "maxY": 342.94117647058823, "series": [{"data": [[1.7098995E12, 342.94117647058823], [1.70989944E12, 308.1479820627796]], "isOverall": false, "label": "Signin", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7098995E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 0.0, "minX": 1.70989944E12, "maxY": 0.717488789237669, "series": [{"data": [[1.7098995E12, 0.0], [1.70989944E12, 0.717488789237669]], "isOverall": false, "label": "Signin", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7098995E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 52.0, "minX": 1.70989944E12, "maxY": 1297.0, "series": [{"data": [[1.7098995E12, 738.0], [1.70989944E12, 1297.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.7098995E12, 502.0], [1.70989944E12, 486.6]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.7098995E12, 737.4], [1.70989944E12, 1093.2899999999893]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.7098995E12, 707.0], [1.70989944E12, 529.4499999999997]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.7098995E12, 117.0], [1.70989944E12, 52.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.7098995E12, 312.0], [1.70989944E12, 293.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7098995E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 72.0, "minX": 4.0, "maxY": 441.0, "series": [{"data": [[32.0, 321.5], [33.0, 294.5], [34.0, 220.0], [16.0, 302.5], [4.0, 233.0], [19.0, 72.0], [21.0, 441.0], [23.0, 306.0], [25.0, 428.0], [26.0, 388.0], [27.0, 302.0], [28.0, 313.5], [31.0, 227.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 72.0, "minX": 4.0, "maxY": 441.0, "series": [{"data": [[32.0, 321.5], [33.0, 294.5], [34.0, 220.0], [16.0, 302.5], [4.0, 233.0], [19.0, 72.0], [21.0, 441.0], [23.0, 306.0], [25.0, 428.0], [26.0, 387.5], [27.0, 302.0], [28.0, 313.5], [31.0, 227.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 34.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 1.8166666666666667, "minX": 1.70989944E12, "maxY": 7.6, "series": [{"data": [[1.7098995E12, 1.8166666666666667], [1.70989944E12, 7.6]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7098995E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.70989944E12, "maxY": 7.433333333333334, "series": [{"data": [[1.7098995E12, 1.9833333333333334], [1.70989944E12, 7.433333333333334]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.7098995E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.70989944E12, "maxY": 7.433333333333334, "series": [{"data": [[1.7098995E12, 1.9833333333333334], [1.70989944E12, 7.433333333333334]], "isOverall": false, "label": "Signin-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7098995E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 1.9833333333333334, "minX": 1.70989944E12, "maxY": 7.433333333333334, "series": [{"data": [[1.7098995E12, 1.9833333333333334], [1.70989944E12, 7.433333333333334]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.7098995E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 3600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}


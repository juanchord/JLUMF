
class Formula {
    constructor() {
        this.category = null;
    }
    compute(data = 0, input, output) {
        if (this.category == "data") {

            //GIGABYTE

            if (input == "gigabyte" && output == "megabyte") {
                return data * 1000;
            };
            if (input == "gigabyte" && output == "terabyte") {
                return data / 1000;
            };

            //MEGABYTE

            if (input == "megabyte" && output == "gigabyte") {
                return data / 1000;
            };
            if (input == "megabyte" && output == "terabyte") {
                return data / 1e+6;
            };

            //TERABYTE

            if (input == "terabyte" && output == "gigabyte") {
                return data * 1000;
            };
            
            if (input == "terabyte" && output == "megabyte") {
                return data * 1e+6;
            };

        }
        if (this.category == "temperature") {

            //FAHRENHEIT

            if (input == "fahrenheit" && output == "celsius") {
                return (data - 32)*(5/9);
            }
            if (input == "fahrenheit" && output == "kelvin") {
                return (data - 32) * (5/9) + 273.15;
            }
            //CELSIUS
            if (input == "celsius" && output == "fahrenheit") {
                return (data * 9 / 5) + 32;
            }
            if (input == "celsius" && output == "kelvin") {
                return data + 273.15;
            }
            //KELVIN
            if (input == "kelvin" && output == "celsius") {
                return data - 273.15;
            }
            if (input == "kelvin" && output == "fahrenheit") {
                return (data - 273.15) * (9 / 5) + 32;
            }
        }
        if (this.category == "lengths") {


            //CENTIMETER

            if (input == "centimeter" && output == "inch") {
                return data / 2.54;
            };
            if (input == "centimeter" && output == "foot") {
                return data / 30.48;
            };
            if (input == "centimeter" && output == "meter") {
                return data / 100;
            };
            if (input == "centimeter" && output == "kilometer") {
                return data / 100000;
            };
            if (input == "centimeter" && output == "mile") {
                return data / 100000;
            };
            //FOOT
            if (input == "foot" && output == "centimeter") {
                return data * 30.48;
            };
            if (input == "foot" && output == "inch") {
                return data * 30.48;
            };
            if (input == "foot" && output == "meter") {
                return data / 3.281;
            };
            if (input == "foot" && output == "kilometer") {
                return data / 3281;
            };
            if (input == "foot" && output == "mile") {
                return data / 5280;
            };
            //INCH
            if (input == "inch" && output == "centimeter") {
                return data * 2.54;
            };
            if (input == "inch" && output == "foot") {
                return data / 12;
            };
            if (input == "inch" && output == "meter") {
                return data / 39.37;
            };
            if (input == "inch" && output == "kilometer") {
                return data / 39370;
            };
            if (input == "inch" && output == "mile") {
                return data / 63360;
            };
            //METER
            if (input == "meter" && output == "centimeter") {
                return data * 100;
            };
            if (input == "meter" && output == "foot") {
                return data * 3.281;
            };
            if (input == "meter" && output == "inch") {
                return data * 39.37;
            };
            if (input == "meter" && output == "kilometer") {
                return data / 1000;
            };
            if (input == "meter" && output == "mile") {
                return data / 1609;
            }; 
            //KILOMETER
            if (input == "kilometer" && output == "centimeter") {
                return data * 100000;
            };
            if (input == "kilometer" && output == "foot") {
                return data / 1.609;
            };
            if (input == "kilometer" && output == "inch") {
                return data * 39370;
            };
            if (input == "kilometer" && output == "meter") {
                return data * 1000;
            };
            if (input == "kilometer" && output == "mile") {
                return data / 1.609;
            };
            
            //MILE
            if (input == "mile" && output == "centimeter") {
                return data * 160934;
            };

            if (input == "mile" && output == "foot") {
                return data * 5280;
            };
            if (input == "mile" && output == "inch") {
                return data * 63360;
            };
            if (input == "mile" && output == "meter") {
                return data * 1609;
            };
            if (input == "mile" && output == "kilometer") {
                return data * 1.609;
            };
        }

        if (this.category == "mass") {

            //GRAM

            if (input == "gram" && output == "kilogram") {
                return data / 1000;
            };

            if (input == "gram" && output == "ounce") {
                return data / 28.35;
            };

            if (input == "gram" && output == "pound") {
                return data / 454;
            };

            //KILOGRAM

            if (input == "kilogram" && output == "gram") {
                return data  * 1000;
            };

            if (input == "kilogram" && output == "ounce") {
                return data * 35.274;
            };
            if (input == "kilogram" && output == "pound") {
                return data * 2.205;
            };

            //OUNCE

            if (input == "ounce" && output == "gram") {
                return data * 28.35;
            };

            if (input == "ounce" && output == "kilogram") {
                return data * 35.274;
            };

            if (input == "ounce" && output == "pound") {
                return data / 16;
            };

            //POUND

            if (input == "pound" && output == "gram") {
                return data * 454;
            };

            if (input == "pound" && output == "kilogram") {
                return data / 2.205;
            };

            if (input == "pound" && output == "ounce") {
                return data * 16;
            };
        };
    }
}
export { Formula };
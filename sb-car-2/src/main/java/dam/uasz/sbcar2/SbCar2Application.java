package dam.uasz.sbcar2;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.lang.reflect.Array;
import java.util.Arrays;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;

import dam.uasz.sbcar2.domain.Car;
import dam.uasz.sbcar2.domain.CarRepository;
import dam.uasz.sbcar2.domain.Owner;
import dam.uasz.sbcar2.domain.OwnerRepository;

@SpringBootApplication
public class SbCar2Application implements CommandLineRunner {
    private static final Logger logger = 
        LoggerFactory.getLogger(SbCar2Application.class);

    @Autowired
    private CarRepository repository;

    @Autowired
    private OwnerRepository orepository;

    public static void main(String[] args) {
        SpringApplication.run(SbCar2Application.class, args);
    }

    @Override
    public void run(String... args) throws Exception {

        // Add owner objects and save these to db 
        Owner owner1 = new Owner("Bassirou", "Touré");
        Owner owner2 = new Owner("Abdoulaye", "Sarré");
        Owner owner3 = new Owner("André", "Sarr");
        orepository.saveAll(Arrays.asList(owner1, owner2, owner3));

        // Add car objects and save these to db 
        Car car1 = new Car("Ford", "Mustang", "Red", "ADF-1121", 2023, 59000, owner1);
        Car car2 = new Car("Nissan", "Leaf", "White", "SSJ-3002", 2019, 29000, owner2);
        Car car3 = new Car("Toyota", "Prius", "Silver", "KKO-0212", 2020, 39000, owner3);
        
        repository.saveAll(java.util.Arrays.asList(car1, car2, car3));

        // Fetch all cars and log
        for (Car car : repository.findAll()) {
            logger.info(car.getBrand() + " " + car.getModel());
        }
    }
}
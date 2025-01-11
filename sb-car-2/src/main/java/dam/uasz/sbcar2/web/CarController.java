package dam.uasz.sbcar2.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.ResponseEntity;
import java.util.List;

import dam.uasz.sbcar2.domain.Car;
import dam.uasz.sbcar2.domain.CarRepository;

@RestController
@CrossOrigin(origins = "*")
public class CarController {
    
    @Autowired
    private CarRepository carRepository;
    
    @GetMapping("/api/cars")
    public ResponseEntity<List<Car>> getAllCars() {
        List<Car> cars = (List<Car>) carRepository.findAll();
        return ResponseEntity.ok(cars);
    }
}
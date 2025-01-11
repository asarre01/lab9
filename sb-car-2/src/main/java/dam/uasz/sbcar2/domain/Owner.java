package dam.uasz.sbcar2.domain;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.CascadeType;
import java.util.List;

@Entity
public class Owner {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long ownerid;
    
    private String firstname;
    private String lastname;
    
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "owner")
    private List<Car> cars;
    
    public Owner() {}
    
    public Owner(String firstname, String lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
    }
    
    // Getters
    public Long getOwnerid() { return ownerid; }
    public String getFirstname() { return firstname; }
    public String getLastname() { return lastname; }
    public List<Car> getCars() { return cars; }
    
    // Setters
    public void setOwnerid(Long ownerid) { this.ownerid = ownerid; }
    public void setFirstname(String firstname) { this.firstname = firstname; }
    public void setLastname(String lastname) { this.lastname = lastname; }
    public void setCars(List<Car> cars) { this.cars = cars; }
}
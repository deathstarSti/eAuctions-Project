/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package entities;

import java.io.Serializable;
import java.time.LocalDate;
import java.util.Collection;
import java.util.Date;
//import java.util.LocalDate;
import javax.json.bind.annotation.JsonbDateFormat;
import javax.json.bind.annotation.JsonbProperty;
import javax.json.bind.annotation.JsonbTransient;
import javax.persistence.Basic;
import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.Lob;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.NamedQueries;
import javax.persistence.NamedQuery;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import javax.xml.bind.annotation.XmlAttribute;
import javax.xml.bind.annotation.XmlElement;
import javax.xml.bind.annotation.XmlRootElement;
import javax.xml.bind.annotation.XmlTransient;

/**
 *
 * @author kotso
 */
@Entity
@Table(name = "item")
@XmlRootElement
@NamedQueries({
    @NamedQuery(name = "Item.findAll", query = "SELECT i FROM Item i"),
    @NamedQuery(name = "Item.findByIdItem", query = "SELECT i FROM Item i WHERE i.idItem = :idItem"),
    @NamedQuery(name = "Item.findByName", query = "SELECT i FROM Item i WHERE i.name = :name"),
    @NamedQuery(name = "Item.findByFirstBid", query = "SELECT i FROM Item i WHERE i.firstBid = :firstBid"),
    @NamedQuery(name = "Item.findByBuyPrice", query = "SELECT i FROM Item i WHERE i.buyPrice = :buyPrice"),
    @NamedQuery(name = "Item.findByStarted", query = "SELECT i FROM Item i WHERE i.started = :started"),
    @NamedQuery(name = "Item.findByEnds", query = "SELECT i FROM Item i WHERE i.ends = :ends"),
    @NamedQuery(name = "Item.findByLocation", query = "SELECT i FROM Item i WHERE i.location = :location"),
    @NamedQuery(name = "Item.findByCountry", query = "SELECT i FROM Item i WHERE i.country = :country"),
    @NamedQuery(name = "Item.findByLat", query = "SELECT i FROM Item i WHERE i.lat = :lat"),
    @NamedQuery(name = "Item.findByLon", query = "SELECT i FROM Item i WHERE i.lon = :lon")})
public class Item implements Serializable {

    @Basic(optional = false)
    @NotNull()
    @Column(name = "started")
    //@Temporal(TemporalType.DATE)
    private LocalDate started;

    @Basic(optional = false)
    @NotNull()
    @Column(name = "ends")
   
   // @Temporal(TemporalType.DATE)
    private LocalDate ends;
    @Lob()
    @Column(name = "photo")
    //@Temporal(TemporalType.DATE)
    private byte[] photo;
    //@JsonbTransient
    @ManyToMany(mappedBy = "itemCollection")
    private Collection<Category> categoryCollection;
    
  
    //@JsonbTransient
    @OneToMany(cascade = CascadeType.ALL, mappedBy = "idItem")
    private Collection<Bid> bidCollection;

    private static final long serialVersionUID = 1L;
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Basic(optional = false)
    @Column(name = "idItem")
    private Integer idItem;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "name")
    private String name;
    @Basic(optional = false)
    @NotNull
    @Column(name = "firstBid")
    private float firstBid;
    // @Max(value=?)  @Min(value=?)//if you know range of your decimal fields consider using these annotations to enforce field validation
    @Column(name = "buyPrice")
    private Float buyPrice;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "location")
    private String location;
    @Basic(optional = false)
    @NotNull
    @Size(min = 1, max = 45)
    @Column(name = "country")
    private String country;
    @Column(name = "lat")
    private Float lat;
    @Column(name = "lon")
    private Float lon;
    @Basic(optional = false)
    //@NotNull
    @Lob
    @Size(min = 1, max = 65535)
    @Column(name = "description")
    private String description;
  
    @JoinColumn(name = "idUser", referencedColumnName = "idUser")
    @ManyToOne(optional = false)
    private User idUser;

    public Item() {
    }

    public Item(Integer idItem) {
        this.idItem = idItem;
    }

    public Item(Integer idItem, String name, float firstBid, LocalDate started, LocalDate ends, String location, String country, String description) {
        this.idItem = idItem;
        this.name = name;
        this.firstBid = firstBid;
        this.started = started;
        this.ends = ends;
        this.location = location;
        this.country = country;
        this.description = description;
    }
    

    public Integer getIdItem() {
        return idItem;
    }

    @XmlAttribute
    public void setIdItem(Integer idItem) {
        this.idItem = idItem;
    }

    public String getName() {
        return name;
    }
    @XmlElement
    public void setName(String name) {
        this.name = name;
    }

    public float getFirstBid() {
        return firstBid;
    }
    
    @XmlElement
    public void setFirstBid(float firstBid) {
        this.firstBid = firstBid;
    }

    public Float getBuyPrice() {
        return buyPrice;
    }
    @XmlElement
    public void setBuyPrice(Float buyPrice) {
        this.buyPrice = buyPrice;
    }


    public String getLocation() {
        return location;
    }

    @XmlElement
    public void setLocation(String location) {
        this.location = location;
    }

    public String getCountry() {
        return country;
    }

    @XmlElement
    public void setCountry(String country) {
        this.country = country;
    }

    public Float getLat() {
        return lat;
    }

    @XmlElement
    public void setLat(Float lat) {
        this.lat = lat;
    }

    public Float getLon() {
        return lon;
    }

    @XmlElement
    public void setLon(Float lon) {
        this.lon = lon;
    }

    public String getDescription() {
        return description;
    }

    @XmlElement
    public void setDescription(String description) {
        this.description = description;
    }


    public User getIdUser() {
        return idUser;
    }

    @XmlElement
    public void setIdUser(User idUser) {
        this.idUser = idUser;
    }

    @Override
    public int hashCode() {
        int hash = 0;
        hash += (idItem != null ? idItem.hashCode() : 0);
        return hash;
    }

    @Override
    public boolean equals(Object object) {
        // TODO: Warning - this method won't work in the case the id fields are not set
        if (!(object instanceof Item)) {
            return false;
        }
        Item other = (Item) object;
        if ((this.idItem == null && other.idItem != null) || (this.idItem != null && !this.idItem.equals(other.idItem))) {
            return false;
        }
        return true;
    }

    @Override
    public String toString() {
        return "entities.Item[ idItem=" + idItem + " ]";
    }


    //@XmlTransient
    public Collection<Category> getCategoryCollection() {
        return categoryCollection;
    }

    public void setCategoryCollection(Collection<Category> categoryCollection) {
        this.categoryCollection = categoryCollection;
    }

    //@XmlTransient
    public Collection<Bid> getBidCollection() {
        return bidCollection;
    }

   @XmlElement
    public void setBidCollection(Collection<Bid> bidCollection) {
        this.bidCollection = bidCollection;
    }

    public LocalDate getStarted() {
        return started;
    }

    public void setStarted(LocalDate started) {
        this.started = started;
    }

    public LocalDate getEnds() {
        return ends;
    }

    public void setEnds(LocalDate ends) {
        this.ends = ends;
    }

    public byte[] getPhoto() {
        return photo;
    }
  
    public void setPhoto(byte[] photo) {
        this.photo = photo;
    }
    
}

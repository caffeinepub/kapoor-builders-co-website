import Array "mo:core/Array";
import Map "mo:core/Map";
import Nat "mo:core/Nat";
import Order "mo:core/Order";
import Iter "mo:core/Iter";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";

actor {
  type Review = {
    name : Text;
    rating : Nat;
    message : Text;
  };

  type ContactMessage = {
    name : Text;
    phone : Text;
    message : Text;
  };

  module Review {
    public func compare(review1 : Review, review2 : Review) : Order.Order {
      switch (Nat.compare(review1.rating, review2.rating)) {
        case (#equal) { Text.compare(review1.name, review2.name) };
	      case (order) { order };
      };
    };
  };

  let reviews = Map.empty<Principal, Review>();
  let contactMessages = Map.empty<Principal, ContactMessage>();

  // Reviews
  public shared ({ caller }) func submitReview(name : Text, rating : Nat, message : Text) : async () {
    if (rating < 1 or rating > 5) {
      Runtime.trap("Rating must be between 1 and 5");
    };
    let review : Review = {
      name;
      rating;
      message;
    };
    reviews.add(caller, review);
  };

  public query func getAllReviews() : async [Review] {
    reviews.values().toArray().sort();
  };

  // Contact
  public shared ({ caller }) func submitContactMessage(name : Text, phone : Text, message : Text) : async () {
    let contactMessage : ContactMessage = {
      name;
      phone;
      message;
    };
    contactMessages.add(caller, contactMessage);
  };

  // Owner Info
  public query ({ caller }) func getOwnerName() : async Text {
    "Sumit Kapoor";
  };
};

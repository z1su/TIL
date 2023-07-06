import Button from "../ui/button";
function EventSearch(props) {
  return (
    <form>
      <div>
        <label htmlFor="year">year</label>
        <select id="year">
          <option value="2021">2021</option>
          <option value="2022">2022</option>
        </select>
      </div>

      <div>
        <label htmlFor="month">Month</label>
        <select id="month">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
          <option value="11">11</option>
          <option value="12">12</option>
        </select>
      </div>
      <Button>Find Events</Button>
    </form>
  );
}

export default EventSearch;

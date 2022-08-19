import Drop from './Drop.module.css';
import classes from './Features.module.css';
import Todo from '../../images/icon-todo.svg';
import Calendar from '../../images/icon-calendar.svg';
import Reminders from '../../images/icon-reminders.svg';
import Planning from '../../images/icon-planning.svg';
function Features(){
    var emptyString = "";
    var link = "#";
    return (   
    <div className={`${classes.FeaturesList} ${Drop.DropDown}`}>
        <span><a href={link}><img src={Todo} alt={emptyString} />Todo List</a></span>
        <span><a href={link}><img src={Calendar} alt={emptyString} />Calendar</a></span>
        <span><a href={link}><img src={Reminders} alt={emptyString} />Reminders</a></span>
        <span><a href={link}><img src={Planning} alt={emptyString}/>Planning</a></span>
    </div>
);
}

export default Features;
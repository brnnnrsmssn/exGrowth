# exGrowth
a system for d&d character progression inspired by the light novel series, written by Fujino Ōmori and illustrated by Suzuhito Yasuda, chronicling the adventures of bell cranell.

the premise is that your actions be they successful or failures give you experience and through that experience you improve, but only in the areas in which you have experience. so hitting something will not improve your ability to cast spells. overlaying this premise on the d&d system of character stats and abilities is the goal of this system.

implementation(s) are targeted at systems which most easily allow for play and use of the system. initially javascript, for use on roll20.net platform as a game script. more implementations may be made in the future.

*all trademarks and copyrights are property of their respective owners. i make no claim to them and use them here only to reference those works.*

## to-do (an incomplete list)
 * determine the number of characters
 * create objects for each character and save stats into those objects
 * allow for addition of new characters and removal of old
 * determine the experience of each stat based on current values from character sheet
 * initialize experience - action valuation
 * expose valuation to some external interface for individual campaign balancing
 * allow for removal and addition of experience actions
 * implement character experience modification methods
 * implement character stats modification based on underlying experience
 * initialize experience - level thresholds
 * implement leveling system
 * implement action (experience) tracking interface
